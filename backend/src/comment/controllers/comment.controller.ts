/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Res, Post, UseGuards, UseInterceptors, Query, Put } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { hasRoles } from 'src/auth/decorators/roles.decorator';
import { CommentDto } from '../comment.dto';
import { CommentService } from '../services/comment.service';

@Controller('comment')
export class CommentController {
    constructor( private commentService : CommentService)
    {
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Post('/new-comment')
    async addComment(@AuthUser() user, @Body() body)
    {
        await this.commentService.addComment(user.userId, body.postId, body.content, body.date);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('admin')
    @Get()
    async findAll() : Promise<CommentDto[]>
    {
        return this.commentService.findAll();
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get('/post-comments')
    async getCommentsForPost(@AuthUser() user, @Query() query): Promise<any[]>
    {
        return this.commentService.getCommentsForPost(query.postId);
    }
}
