import { CommentDto } from '../comment.dto';
import { CommentService } from '../services/comment.service';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    addComment(user: any, body: any): Promise<void>;
    findAll(): Promise<CommentDto[]>;
    getCommentsForPost(user: any, query: any): Promise<any[]>;
}
