/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class NameSurnameDto{
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    surname: string;
}