/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsEmail } from 'class-validator';
import { UserInfoDto } from 'src/user-info/user-info.dto';

export enum UserRoles{
  ADMIN = 'admin',
  USER = 'user',
  EDITOR = 'editor'
}

export class UserDto{
    @IsNumber()
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    userInfo: UserInfoDto;

    roles: UserRoles;
}