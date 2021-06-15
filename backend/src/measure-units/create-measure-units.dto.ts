/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateMeasureUnitsDto{
    @IsString()
    name: string;
}