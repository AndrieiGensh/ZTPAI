import { CommentDto } from 'src/comment/comment.dto';
import { UserDto } from 'src/users/user.dto';
export declare class GetPostDto {
    id: number;
    date: Date;
    title: string;
    content: string;
    photoPath: string;
    likes: number;
    dislikes: number;
    hashtags: string;
    user: UserDto;
    comments: CommentDto[];
}
