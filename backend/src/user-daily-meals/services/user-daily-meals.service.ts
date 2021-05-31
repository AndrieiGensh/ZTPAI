/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StringDecoder } from 'node:string_decoder';
import { CreateFoodDto } from 'src/food/create-food.dto';
import { FoodDto } from 'src/food/food.dto';
import { FoodService } from 'src/food/services/food.service';
import { MealTypesDto } from 'src/meal-types/meal-types.dto';
import { MealTypesService } from 'src/meal-types/services/meal-types.service';
import { MeasureUnitsDto } from 'src/measure-units/measure-units.dto';
import { MeasureUnitsModule } from 'src/measure-units/measure-units.module';
import { MeasureUnitsService } from 'src/measure-units/services/measure-units.service';
import { StatisticsService } from 'src/statistics/services/statistics.service';
import { StatsDto } from 'src/statistics/stats.dto';
import { UsersService } from 'src/users/services/users.service';
import { UserDto } from 'src/users/user.dto';
import { Repository } from 'typeorm';
import { CreateUserDailyMealsDto } from '../create-user-daily-meal.dto';
import { UserDailyMealsEntity } from '../models/user-daily-meals.entity';
import { UserDailyMealsDto } from '../user-daily-meals.dto';

@Injectable()
export class UserDailyMealsService {
    constructor(
        @InjectRepository(UserDailyMealsEntity)
        private mealsRepo: Repository<UserDailyMealsEntity>,
        private foodService: FoodService,
        private muService: MeasureUnitsService,
        private mealTypesService: MealTypesService,
        private userService: UsersService,
        private statsService: StatisticsService
    ){}

    async getMealsForUser(userId: number): Promise<any[]>
    {
        return this.mealsRepo.createQueryBuilder('m')
        .leftJoin('m.meal', 'food').leftJoin('m.mealType', 'mType').leftJoin('food.measureUnits','mu').
        leftJoin('m.user', 'u').select('m.id', 'recordId'). addSelect('food.name', 'foodName').addSelect('mu.name','MUName')
        .addSelect('mType.name','mealType').addSelect('m.amount_of_units').where('u.id = :usId', {usId: userId})
        .getRawMany();
    }

    async addNewMeal(userId: number, foodName: string, type: string, amount: number, date: string): Promise<any>
    {
        const food: CreateFoodDto = await this.foodService.findEntityByName(foodName);
        console.log(food);
        if(food === undefined)
        {
            //Impossible but still...
        }
        //const measureUnits: MeasureUnitsDto = await this.muService.getByName(food.measurementName);
        const mealType: MealTypesDto = await this.mealTypesService.getByName(type);
        console.log(mealType);
        const user : UserDto = await this.userService.findById(userId);
        console.log(user);
        const userMealRecord: CreateUserDailyMealsDto = new CreateUserDailyMealsDto();
        userMealRecord.user = user;
        userMealRecord.mealType = mealType;
        userMealRecord.meal = food;
        userMealRecord.amount_of_units = amount;
        console.log(userMealRecord);
        const tmp = await this.mealsRepo.save(userMealRecord);
        console.log(tmp);

        const stats: StatsDto = new StatsDto();
        stats.carbs = food.carbsPerUnit * amount
        stats.fats = food.fatsPerUnit * amount;
        stats.kcal = food.kcalPerUnit * amount;
        stats.proteins = food.proteinsPerUnit * amount;
        stats.date = new Date(date);
        console.log("New stst that is about to be added to the stats table after adding new meal: ", stats);
        await this.statsService.addOrUpdateStats(stats, userId, date);
        // MUST RETURN getMealsForUserId call result
        return this.getMealsForUser(userId);
    }

    async updateUsersMealAndStats(userId: number, recordId: number, amount: number, date: string): Promise<any[]>
    {
        const oldRecord: UserDailyMealsDto = await this.mealsRepo.createQueryBuilder('m')
        .leftJoinAndSelect('m.meal', 'ml').leftJoinAndSelect('m.user', 'us').leftJoinAndSelect('m.mealType', 'mt')
        .where('m.id = :mealId', {mealId: recordId}).getOne();
        console.log(oldRecord);
        const food: CreateFoodDto = oldRecord.meal;
        console.log(food);
        const oldAmount: number = oldRecord.amount_of_units;
        console.log(oldAmount);
        const stats: StatsDto = new StatsDto();
        const amountDiff: number  = amount - oldAmount;
        console.log(amountDiff);
        stats.carbs = food.carbsPerUnit * amountDiff;
        stats.fats = food.fatsPerUnit * amountDiff;
        stats.kcal = food.kcalPerUnit * amountDiff;
        stats.proteins = food.proteinsPerUnit * amountDiff;
        stats.date = new Date(date);
        let res;
        if(amount === 0)
        {
            res = await this.mealsRepo.delete({id: recordId});
        }
        res = await this.mealsRepo.save({id: recordId, amount_of_units: amount});

        res = await this.statsService.addOrUpdateStats(stats, userId, date);
        return this.getMealsForUser(userId);
    }

    async deleteUsersMeal(recordId: number, userId: number, date: string): Promise<any>
    {
        return this.updateUsersMealAndStats(userId, recordId, 0, date);
    }
}
