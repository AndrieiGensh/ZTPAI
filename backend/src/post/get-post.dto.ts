/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsString } from 'class-validator';
import { CommentDto } from 'src/comment/comment.dto';
import { UserDto } from 'src/users/user.dto';

export class GetPostDto{
    @IsNumber()
    id: number;

    @IsDate()
    date: Date;

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsString()
    photoPath: string;

    @IsNumber()
    likes: number;

    @IsNumber()
    dislikes: number;

    hashtags: string;

    user: UserDto;

    comments: CommentDto[];
}