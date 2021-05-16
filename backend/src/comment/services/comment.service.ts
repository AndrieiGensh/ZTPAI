/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentDto } from '../comment.dto';
import { CommentEntity } from '../models/comment.entity';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(CommentEntity) private commentRepo: Repository<CommentEntity>)
    {}

    create(comment: CommentDto) : Promise<CommentDto>
    {
        return this.commentRepo.save(comment);
    }

    findAll() : Promise<CommentDto[]>
    {
        return this.commentRepo.find();
    }
    
}
