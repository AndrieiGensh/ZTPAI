import { FoodDto } from 'src/food/food.dto';
import { MealTypesDto } from 'src/meal-types/meal-types.dto';
import { UsertDto } from 'src/users/user.dto';
export declare class UserDailyMealsDto {
    id: number;
    user: UsertDto;
    meal: FoodDto;
    melaType: MealTypesDto;
    amount_of_units: number;
}
