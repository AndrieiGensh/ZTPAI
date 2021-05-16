/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsEmail } from 'class-validator';
import { UserInfoDto } from 'src/user-info/user-info.dto';

export class UsertDto{
    @IsNumber()
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    userInfo: UserInfoDto;

}