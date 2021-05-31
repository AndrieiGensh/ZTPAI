/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsDate } from 'class-validator';
import { UserDto } from 'src/users/user.dto';

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

    user: UserDto;
}