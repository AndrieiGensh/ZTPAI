/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class LifestyleDto{
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    factor: number;
}