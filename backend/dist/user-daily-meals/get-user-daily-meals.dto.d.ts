import { FoodDto } from 'src/food/food.dto';
import { MealTypesDto } from 'src/meal-types/meal-types.dto';
export declare class AddUserDailyMealsDto {
    meal: FoodDto;
    melaType: MealTypesDto;
    amount_of_units: number;
}
