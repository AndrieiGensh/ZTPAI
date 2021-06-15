/* eslint-disable prettier/prettier */
import { IsNumber, IsString} from 'class-validator';

export class SexDto{
    @IsNumber()
    id: number;

    @IsString()
    name: string;
}