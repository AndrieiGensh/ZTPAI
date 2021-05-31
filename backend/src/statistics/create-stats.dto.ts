/* eslint-disable prettier/prettier */
import { IsDate, IsNumber} from 'class-validator';
import { UserDto } from 'src/users/user.dto';

export class CreateStatsDto{
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

    user: UserDto;
}