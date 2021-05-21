import { FoodDto } from 'src/food/food.dto';
import { MealTypesDto } from 'src/meal-types/meal-types.dto';
import { UserDto } from 'src/users/user.dto';
export declare class UserDailyMealsDto {
    id: number;
    user: UserDto;
    meal: FoodDto;
    melaType: MealTypesDto;
    amount_of_units: number;
}
