import { FoodEntity } from 'src/food/models/food.entity';
import { MealTypesEntity } from 'src/meal-types/models/meal-types.entity';
import { UserEntity } from 'src/users/models/users.entity';
export declare class UserDailyMealsEntity {
    id: number;
    user: UserEntity;
    meal: FoodEntity;
    mealType: MealTypesEntity;
    amount_of_units: number;
}
