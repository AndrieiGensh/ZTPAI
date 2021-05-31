import { UserDailyMealsService } from '../services/user-daily-meals.service';
export declare class UserDailyMealsController {
    private userMealsService;
    constructor(userMealsService: UserDailyMealsService);
    getDataForUser(user: any): Promise<any>;
    addNewMealForUser(user: any, body: any): Promise<any>;
    updateUserMealsRecords(user: any, body: any): Promise<any>;
    deleteRecord(user: any, body: any): Promise<any>;
}
