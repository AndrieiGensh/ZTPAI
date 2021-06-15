import { Repository } from 'typeorm';
import { CommentDto } from '../comment.dto';
import { CommentEntity } from '../models/comment.entity';
import { PostService } from 'src/post/services/post.service';
import { UsersService } from 'src/users/services/users.service';
export declare class CommentService {
    private commentRepo;
    private postService;
    private userService;
    constructor(commentRepo: Repository<CommentEntity>, postService: PostService, userService: UsersService);
    addComment(userId: number, postId: number, commentContent: string, date: string): Promise<CommentDto & CommentEntity>;
    findAll(): Promise<CommentDto[]>;
    getCommentsForPost(postId: number): Promise<any[]>;
}
