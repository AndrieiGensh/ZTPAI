import { UserEntity } from 'src/users/models/users.entity';
import { CommentEntity } from 'src/comment/models/comment.entity';
export declare class PostEntity {
    id: number;
    date: Date;
    content: string;
    title: string;
    photoPath: string;
    likes: number;
    dislikes: number;
    hashtags: string;
    user: UserEntity;
    comments: CommentEntity[];
    setDate(): void;
}
