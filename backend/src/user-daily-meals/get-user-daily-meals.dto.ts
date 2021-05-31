/* eslint-disable prettier/prettier */
import { IsNumber } from 'class-validator';
import { FoodDto } from 'src/food/food.dto';
import { MealTypesDto } from 'src/meal-types/meal-types.dto';
import { UserDto } from 'src/users/user.dto';

export class AddUserDailyMealsDto{
    meal: FoodDto;

    melaType: MealTypesDto;

    @IsNumber()
    amount_of_units: number;
}