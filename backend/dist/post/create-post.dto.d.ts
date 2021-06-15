import { UserDto } from 'src/users/user.dto';
export declare class CreatePostDto {
    date: Date;
    content: string;
    photoPath: string;
    title: string;
    likes: number;
    dislikes: number;
    hashtags: string;
    user: UserDto;
}
