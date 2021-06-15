/* eslint-disable prettier/prettier */
import { IsDate, IsNumber} from 'class-validator';
import { UserDto } from 'src/users/user.dto';

export class GetStatsDto{
    @IsNumber()
    id: number;

    @IsDate()
    date: Date;

    kcal;

    fats;
  
    carbs;
  
    proteins;

    user: UserDto;
}