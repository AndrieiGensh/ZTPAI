/* eslint-disable prettier/prettier */
import { IsDate, IsNumber} from 'class-validator';

export class StatsDto{
    @IsDate()
    date: Date;

    @IsNumber()
    kcal: number;
  
    @IsNumber()
    fats: number;
  
    @IsNumber()
    carbs: number;
  
    @IsNumber()
    proteins: number;
}