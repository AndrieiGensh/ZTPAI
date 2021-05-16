import { GetPostDto } from 'src/post/get-post.dto';
import { UsertDto } from 'src/users/user.dto';
export declare class CommentDto {
    id: number;
    date: Date;
    content: string;
    likes: number;
    dislikes: number;
    user: UsertDto;
    post: GetPostDto;
}
