import { Repository } from 'typeorm';
import { CommentDto } from '../comment.dto';
import { CommentEntity } from '../models/comment.entity';
export declare class CommentService {
    private commentRepo;
    constructor(commentRepo: Repository<CommentEntity>);
    create(comment: CommentDto): Promise<CommentDto>;
    findAll(): Promise<CommentDto[]>;
}
