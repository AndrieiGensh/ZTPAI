/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { CreatePostDto } from '../create-post.dto';
import { GetPostDto } from '../get-post.dto';
import { PostService } from '../services/post.service';

@Controller('posts')
export class PostController {
    constructor(private postService: PostService)
    {}

    @UseGuards(JwtGuard)
    @Post('new-post')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: '../../uploads'
            }),
        })
    )
    async create(@UploadedFile() image, @Body() body) : Promise<CreatePostDto>
    {
        const newPost = new CreatePostDto();
        newPost.content = body.content;
        newPost.dislikes = body.dislikes;
        newPost.likes = body.likes;
        newPost.hashtags = body.hashtags;
        newPost.title = body.title;
        newPost.user = body.user;

        newPost.photoPath = image.filename;

        return this.postService.createPost(newPost);
    }

    @UseGuards(JwtGuard)
    @Get('rated')
    async getNMostRatedPosts(N: number) : Promise<GetPostDto[]>
    {
        return this.postService.getNMostPopularPosts(N);
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    async getPostById(@Param('id') id: string) : Promise<GetPostDto>
    {
        return this.postService.getPostById(id);
    }
}
