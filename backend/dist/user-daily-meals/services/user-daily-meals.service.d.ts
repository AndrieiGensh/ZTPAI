import { FoodService } from 'src/food/services/food.service';
import { MealTypesService } from 'src/meal-types/services/meal-types.service';
import { MeasureUnitsService } from 'src/measure-units/services/measure-units.service';
import { StatisticsService } from 'src/statistics/services/statistics.service';
import { UsersService } from 'src/users/services/users.service';
import { Repository } from 'typeorm';
import { UserDailyMealsEntity } from '../models/user-daily-meals.entity';
export declare class UserDailyMealsService {
    private mealsRepo;
    private foodService;
    private muService;
    private mealTypesService;
    private userService;
    private statsService;
    constructor(mealsRepo: Repository<UserDailyMealsEntity>, foodService: FoodService, muService: MeasureUnitsService, mealTypesService: MealTypesService, userService: UsersService, statsService: StatisticsService);
    getMealsForUser(userId: number): Promise<any[]>;
    addNewMeal(userId: number, foodName: string, type: string, amount: number, date: string): Promise<any>;
    updateUsersMealAndStats(userId: number, recordId: number, amount: number, date: string): Promise<any[]>;
    deleteUsersMeal(recordId: number, userId: number, date: string): Promise<any>;
}
