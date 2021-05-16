/* eslint-disable prettier/prettier */
import { IsNumber, Allow } from 'class-validator';
import { LifestyleDto } from 'src/lifestyle/lifestyle.dto';
import { NameSurnameDto } from 'src/name-surname/name-surname.dto';
import { SexDto } from 'src/sex/sex.dto';

export class UserInfoDto{
    @IsNumber()
    id: number;

    @IsNumber()
    age: number;

    sex: SexDto;

    namesurname: NameSurnameDto;

    lifestyle: LifestyleDto;
}