import { UserEntity } from 'src/users/models/users.entity';
import { CommentEntity } from 'src/comment/models/comment.entity';
export declare class PostEntity {
    id: number;
    date: Date;
    content: string;
    likes: number;
    dislikes: number;
    user: UserEntity;
    comments: CommentEntity[];
}
