/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentDto } from '../comment.dto';
import { CommentService } from '../services/comment.service';

@Controller('comment')
export class CommentController {
    constructor( private commentService : CommentService)
    {
    }

    @Post()
    create(@Body() comment : CommentDto) : Promise<CommentDto>
    {
        return this.commentService.create(comment);
    }

    @Get()
    async findAll() : Promise<CommentDto[]>
    {
        return this.commentService.findAll();
    }
}
