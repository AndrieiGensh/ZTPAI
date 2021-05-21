import { UserDto } from 'src/users/user.dto';
export declare class GetPostDto {
    id: number;
    date: Date;
    content: string;
    likes: number;
    dislikes: number;
    user: UserDto;
}
