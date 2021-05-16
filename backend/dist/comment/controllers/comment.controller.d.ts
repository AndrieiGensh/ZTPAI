import { CommentDto } from '../comment.dto';
import { CommentService } from '../services/comment.service';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    create(comment: CommentDto): Promise<CommentDto>;
    findAll(): Promise<CommentDto[]>;
}
