/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';
import { MeasureUnitsDto } from 'src/measure-units/measure-units.dto';

export class CreateFoodDto{
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

    measureUnits: MeasureUnitsDto;
}