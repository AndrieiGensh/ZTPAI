/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreatePostDto{
    @IsDate()
    date: Date;

    @IsString()
    content: string;

    @IsNumber()
    likes: number;

    @IsNumber()
    dislikes: number;

    @IsNumber()
    userId: number;
}