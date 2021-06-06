/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../create-post.dto';
import { GetPostDto } from '../get-post.dto';
import { PostFilters } from '../models/post-filters';
import { PostEntity } from '../models/post.entity';
import { UserEntity } from 'src/users/models/users.entity';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity) private postRepo : Repository<PostEntity>,
        private userService: UsersService
        )
    {}

    async getPostById(id: string) : Promise<GetPostDto>
    {
        return await this.postRepo.createQueryBuilder('p').
        addSelect('p.id').addSelect('p.date').addSelect('p.content').
        addSelect('p.photoPath').addSelect('p.likes').addSelect('p.dislikes').
        leftJoinAndSelect('p.user', 'user').leftJoinAndSelect('user.userInfo', 'usIn').
        leftJoinAndSelect('usIn.namesurname', 'namesurname').
        leftJoinAndSelect('p.comments', 'comments').
        where('p.id = :postid', {postid: id}).getOne();
    }

    async getNMostPopularPosts(n: number) : Promise<GetPostDto[]>
    {
        return await this.postRepo.createQueryBuilder('p').
        leftJoinAndSelect('p.user', 'user').
        leftJoinAndSelect('p.comments', 'comments').
        orderBy('p.date', 'DESC').addOrderBy('p.likes', 'DESC').
        take(n).getMany();
    }

    async getFilteredPosts(filters: PostFilters)
    {

    }

    async createPost(userId: number, title: string, content: string, photoPath: string, hashtags: string, date: string) : Promise<CreatePostDto>
    {
        const user = await this.userService.findById(userId);
        console.log("The user is ", user);
        const post: CreatePostDto = new CreatePostDto;
        post.title = title;
        post.content = content;
        post.photoPath = photoPath;
        post.likes = 0;
        post.dislikes = 0;
        post.hashtags = hashtags;
        post.user = user;
        post.date = new Date(date);
        console.log("We are about to save this post instance ", post)

        return this.postRepo.save(post);
    }

    async updateLikesDislikes(postId: number, likes: number, dislikes:  number): Promise<number[]>
    {
        let post = await this.postRepo.createQueryBuilder('p')
        .where('p.id = :PostId', {PostId: postId}).getOne();

        post.likes += likes;
        post.dislikes += dislikes;

        return [post.likes, post.dislikes];
    }
}
