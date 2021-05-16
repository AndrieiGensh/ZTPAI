/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsDate } from 'class-validator';
import { GetPostDto } from 'src/post/get-post.dto';
import { UsertDto } from 'src/users/user.dto';

export class CommentDto{
    @IsNumber()
    id: number;

    @IsDate()
    date: Date;

    @IsString()
    content: string;

    @IsNumber()
    likes: number;

    @IsNumber()
    dislikes: number;

    user: UsertDto;

    post: GetPostDto;
}