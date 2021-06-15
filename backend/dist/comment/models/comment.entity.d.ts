import { UserEntity } from 'src/users/models/users.entity';
import { PostEntity } from 'src/post/models/post.entity';
export declare class CommentEntity {
    id: number;
    date: Date;
    content: string;
    likes: number;
    dislikes: number;
    user: UserEntity;
    post: PostEntity;
}
