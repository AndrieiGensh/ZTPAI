/* eslint-disable prettier/prettier */
import { IsNumber } from 'class-validator';
import { CreateFoodDto } from 'src/food/create-food.dto';
import { FoodDto } from 'src/food/food.dto';
import { MealTypesDto } from 'src/meal-types/meal-types.dto';
import { UserDto } from 'src/users/user.dto';

export class CreateUserDailyMealsDto{

    user: UserDto;

    meal: CreateFoodDto;

    mealType: MealTypesDto;

    @IsNumber()
    amount_of_units: number;
}