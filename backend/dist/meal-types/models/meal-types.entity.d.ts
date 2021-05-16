import { UserDailyMealsEntity } from 'src/user-daily-meals/models/user-daily-meals.entity';
export declare class MealTypesEntity {
    id: number;
    name: string;
    userDailyMeals: UserDailyMealsEntity[];
}
