/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentDto } from '../comment.dto';
import { CommentEntity } from '../models/comment.entity';
import { GetPostDto } from 'src/post/get-post.dto';
import { PostService } from 'src/post/services/post.service';
import { UsersService } from 'src/users/services/users.service';
import { UserDto } from 'src/users/user.dto';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(CommentEntity) private commentRepo: Repository<CommentEntity>,
        private postService: PostService, private userService: UsersService
    ){}

    async addComment(userId: number, postId: number, commentContent: string, date: string)
    {
        const commentAuthor = await this.userService.findById(userId);
        const postInstance  = await this.postService.getPostById(postId.toString());
        const comment: CommentDto = new CommentDto();
        comment.user = commentAuthor;
        comment.post = postInstance;
        comment.content = commentContent;
        comment.likes = 0;
        comment.dislikes = 0;
        comment.date = new Date(date);
        return this.commentRepo.save(comment);
    }

    findAll() : Promise<CommentDto[]>
    {
        return this.commentRepo.find();
    }

    async getCommentsForPost(postId: number): Promise<any[]>
    {
        return this.commentRepo.createQueryBuilder('c')
        .leftJoin('c.post', 'commentPost').leftJoin('c.user', 'author')
        .leftJoin('author.userInfo', 'usIn').leftJoin('usIn.namesurname', 'NameSurname')
        .addSelect('c.content', 'content').addSelect('c.date', 'creationDate')
        .addSelect('NameSurname.name', 'authorName')
        .where('commentPost.id = :PostId', {PostId: postId})
        .getRawMany();
    }
    
}
