/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsString } from 'class-validator';
import { UserDto } from 'src/users/user.dto';

export class CreatePostDto{
    @IsDate()
    date: Date;

    @IsString()
    content: string;

    @IsString()
    photoPath: string;

    @IsString()
    title: string;

    @IsNumber()
    likes: number;

    @IsNumber()
    dislikes: number;

    hashtags: string;

    user: UserDto;
}