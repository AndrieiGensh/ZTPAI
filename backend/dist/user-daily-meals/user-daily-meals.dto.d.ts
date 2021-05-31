import { CreateFoodDto } from 'src/food/create-food.dto';
import { MealTypesDto } from 'src/meal-types/meal-types.dto';
import { UserDto } from 'src/users/user.dto';
export declare class UserDailyMealsDto {
    id: number;
    user: UserDto;
    meal: CreateFoodDto;
    mealType: MealTypesDto;
    amount_of_units: number;
}
