/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsString } from 'class-validator';
import { UsertDto } from 'src/users/user.dto';

export class GetPostDto{
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
}