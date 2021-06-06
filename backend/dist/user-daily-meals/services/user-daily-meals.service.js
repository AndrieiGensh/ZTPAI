"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDailyMealsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const create_food_dto_1 = require("../../food/create-food.dto");
const food_dto_1 = require("../../food/food.dto");
const food_service_1 = require("../../food/services/food.service");
const meal_types_dto_1 = require("../../meal-types/meal-types.dto");
const meal_types_service_1 = require("../../meal-types/services/meal-types.service");
const measure_units_dto_1 = require("../../measure-units/measure-units.dto");
const measure_units_module_1 = require("../../measure-units/measure-units.module");
const measure_units_service_1 = require("../../measure-units/services/measure-units.service");
const statistics_service_1 = require("../../statistics/services/statistics.service");
const stats_dto_1 = require("../../statistics/stats.dto");
const users_service_1 = require("../../users/services/users.service");
const user_dto_1 = require("../../users/user.dto");
const typeorm_2 = require("typeorm");
const create_user_daily_meal_dto_1 = require("../create-user-daily-meal.dto");
const user_daily_meals_entity_1 = require("../models/user-daily-meals.entity");
let UserDailyMealsService = class UserDailyMealsService {
    constructor(mealsRepo, foodService, muService, mealTypesService, userService, statsService) {
        this.mealsRepo = mealsRepo;
        this.foodService = foodService;
        this.muService = muService;
        this.mealTypesService = mealTypesService;
        this.userService = userService;
        this.statsService = statsService;
    }
    async getMealsForUser(userId, mealType) {
        console.log("I am in the service and meal type is ", mealType);
        return this.mealsRepo.createQueryBuilder('m')
            .leftJoin('m.meal', 'food').leftJoin('m.mealType', 'mType').leftJoin('food.measureUnits', 'mu').
            leftJoin('m.user', 'u').select('m.id', 'recordId').addSelect('food.name', 'foodName').addSelect('mu.name', 'MUName')
            .addSelect('mType.name', 'mealType').addSelect('m.amount_of_units', 'amount').where('u.id = :usId', { usId: userId })
            .andWhere("mType.name = :myMealType", { myMealType: mealType })
            .getRawMany();
    }
    async addNewMeal(userId, foodName, type, amount, date) {
        console.log("SO THE DATE IN ADDING METHID IN USER MEALS IS ", date);
        const food = await this.foodService.findEntityByName(foodName);
        console.log(food);
        if (food === undefined) {
        }
        const mealType = await this.mealTypesService.getByName(type);
        console.log(mealType);
        const user = await this.userService.findById(userId);
        console.log(user);
        const userMealRecord = new create_user_daily_meal_dto_1.CreateUserDailyMealsDto();
        userMealRecord.user = user;
        userMealRecord.mealType = mealType;
        userMealRecord.meal = food;
        userMealRecord.amount_of_units = amount;
        console.log(userMealRecord);
        const tmp = await this.mealsRepo.save(userMealRecord);
        console.log(tmp);
        const stats = new stats_dto_1.StatsDto();
        stats.carbs = food.carbsPerUnit * amount;
        stats.fats = food.fatsPerUnit * amount;
        stats.kcal = food.kcalPerUnit * amount;
        stats.proteins = food.proteinsPerUnit * amount;
        stats.date = new Date(date);
        console.log("New stst that is about to be added to the stats table after adding new meal: ", stats, stats.date.toISOString());
        await this.statsService.addOrUpdateStats(stats, userId, date);
        return this.getMealsForUser(userId, type);
    }
    async updateUsersMealAndStats(userId, recordId, amount, date) {
        const oldRecord = await this.mealsRepo.createQueryBuilder('m')
            .leftJoinAndSelect('m.meal', 'ml').leftJoinAndSelect('m.user', 'us').leftJoinAndSelect('m.mealType', 'mt')
            .where('m.id = :mealId', { mealId: recordId }).getOne();
        console.log('Old record = ', oldRecord);
        const food = oldRecord.meal;
        console.log('Food in this record is ', food);
        const oldAmount = oldRecord.amount_of_units;
        console.log('The amount of unit for this food in this record is ', oldAmount);
        const stats = new stats_dto_1.StatsDto();
        const amountDiff = amount - oldAmount;
        console.log('Amount difference is now ', amountDiff);
        stats.carbs = food.carbsPerUnit * amountDiff;
        stats.fats = food.fatsPerUnit * amountDiff;
        stats.kcal = food.kcalPerUnit * amountDiff;
        stats.proteins = food.proteinsPerUnit * amountDiff;
        stats.date = new Date(date);
        let res;
        if (amount === 0) {
            console.log('Amount requested is 0, so i need to delete the record');
            res = await this.mealsRepo.delete({ id: recordId });
        }
        else {
            console.log('Amount is not null, so i need to update the record');
            res = await this.mealsRepo.save({ id: recordId, amount_of_units: amount });
        }
        res = await this.statsService.addOrUpdateStats(stats, userId, date);
        return this.getMealsForUser(userId, oldRecord.mealType.name);
    }
    async deleteUsersMeal(recordId, userId, date) {
        return this.updateUsersMealAndStats(userId, recordId, 0, date);
    }
};
UserDailyMealsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_daily_meals_entity_1.UserDailyMealsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        food_service_1.FoodService,
        measure_units_service_1.MeasureUnitsService,
        meal_types_service_1.MealTypesService,
        users_service_1.UsersService,
        statistics_service_1.StatisticsService])
], UserDailyMealsService);
exports.UserDailyMealsService = UserDailyMealsService;
//# sourceMappingURL=user-daily-meals.service.js.map