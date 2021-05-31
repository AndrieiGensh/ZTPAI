/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../create-post.dto';
import { GetPostDto } from '../get-post.dto';
import { PostFilters } from '../models/post-filters';
import { PostEntity } from '../models/post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity) private postRepo : Repository<PostEntity>
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
        where('p.id = :posid', {postid: id}).getOne();
    }

    async getNMostPopularPosts(n: number) : Promise<GetPostDto[]>
    {
        return await this.postRepo.createQueryBuilder('p').
        leftJoinAndSelect('p.user', 'user').
        leftJoinAndSelect('p.comments', 'comments').
        leftJoinAndSelect('user.namesurname', 'namesurname').
        orderBy('p.date', 'DESC').addOrderBy('p.likes', 'DESC').
        take(n).getMany();
    }

    async getFilteredPosts(filters: PostFilters)
    {

    }

    async createPost(newPost: CreatePostDto) : Promise<CreatePostDto>
    {
        return await this.postRepo.save(newPost);
    }
}
