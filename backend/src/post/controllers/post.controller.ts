/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Res, Post, UploadedFile, UseGuards, UseInterceptors, Query, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreatePostDto } from '../create-post.dto';
import { GetPostDto } from '../get-post.dto';
import { PostService } from '../services/post.service';
import path = require("path");
import { join } from "path";
import { v4 as uuidv4 } from 'uuid';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { hasRoles } from 'src/auth/decorators/roles.decorator';

@Controller('posts')
export class PostController {
    constructor(private postService: PostService)
    {}

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Post('/create-post')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: (req, file, cb) =>{
                    cb(null, 'src/uploads');
                },
                filename: (req, file, cb) => {
                    const filename : string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
                    const extension = path.parse(file.originalname).ext;
                    cb(null, filename + '-' + extension);
                }
            }),
        })
    )
    async create(@UploadedFile() image, @AuthUser() user, @Body() body) : Promise<CreatePostDto>
    {
        return this.postService.createPost(user.userId, body.title, body.content, image.filename, body.hashtags, body.date);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get('/rated')
    async getNMostRatedPosts(@Query() query) : Promise<GetPostDto[]>
    {
        return this.postService.getNMostPopularPosts(query.n);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get('/get-post-by-id/:id')
    async getPostById(@Param('id') id: string) : Promise<GetPostDto>
    {
        return this.postService.getPostById(id);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get('/post')
    async getPostImage(@Query() query, @Res() res): Promise<Object>
    {
        const post = await this.postService.getPostById(query.postId.toString());
        if(post === undefined)
        {
            return Error("No such post for a given Id");
        }
        const imagePath = post.photoPath;
        return res.sendFile(join(process.cwd(), 'src/uploads/' + imagePath));
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Put()
    async updateLikesDislikes(@Body() body): Promise<number[]>
    {
        return this.postService.updateLikesDislikes(body.postId ,body.likes, body.dislikes);
    }
}
