import { UserDto } from 'src/users/user.dto';
import { GetPostDto } from 'src/post/get-post.dto';
export declare class CommentDto {
    id: number;
    date: Date;
    content: string;
    likes: number;
    dislikes: number;
    user: UserDto;
    post: GetPostDto;
}
