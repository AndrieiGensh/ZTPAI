/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class MealTypesDto{
    @IsNumber()
    id: number;

    @IsString()
    name: string;
}