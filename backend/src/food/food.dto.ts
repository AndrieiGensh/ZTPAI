/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class FoodDto{
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    kcalPerUnit: number;

    @IsNumber()
    fatsPerUnit: number;

    @IsNumber()
    carbsPerUnit: number;

    @IsNumber()
    proteinsPerUnit: number;
}