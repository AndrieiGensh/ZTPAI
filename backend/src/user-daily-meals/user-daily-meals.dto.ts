/* eslint-disable prettier/prettier */
import { IsNumber } from 'class-validator';
import { FoodDto } from 'src/food/food.dto';
import { MealTypesDto } from 'src/meal-types/meal-types.dto';
import { UsertDto } from 'src/users/user.dto';

export class UserDailyMealsDto{
    @IsNumber()
    id: number;

    user: UsertDto;

    meal: FoodDto;

    melaType: MealTypesDto;

    @IsNumber()
    amount_of_units: number;
}