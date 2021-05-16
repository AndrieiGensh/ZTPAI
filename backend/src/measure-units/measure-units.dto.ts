/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class MeasureUnitsDto{
    @IsNumber()
    id: number;

    @IsString()
    name: string;
}