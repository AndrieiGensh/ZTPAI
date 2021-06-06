/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { UserDailyMealsService } from '../services/user-daily-meals.service';

@Controller('user-daily-meals')
export class UserDailyMealsController {
    constructor(
        private userMealsService: UserDailyMealsService
    )
    {}

    @UseGuards(JwtGuard)
    @Get()
    async getDataForUser(@AuthUser() user: any, @Query() query): Promise<any>
    {
        console.log(user);
        console.log("The query is ", query, query.mealType);
        return this.userMealsService.getMealsForUser(user.userId, query.mealType);
    }

    @UseGuards(JwtGuard)
    @Post()
    async addNewMealForUser(@AuthUser() user, @Body() body): Promise<any>
    {
        return this.userMealsService.addNewMeal(user.userId, body.foodName, body.type, body.amount, body.date);
    }

    @UseGuards(JwtGuard)
    @Put()
    async updateUserMealsRecords(@AuthUser() user, @Body() body): Promise<any>
    {
        return this.userMealsService.updateUsersMealAndStats(user.userId, body.recordId, body.amount, body.date);
    }

    @UseGuards(JwtGuard)
    @Delete()
    async deleteRecord(@AuthUser() user, @Query() query): Promise<any>
    {
        return this.userMealsService.deleteUsersMeal(query.recordId, user.userId, query.date);
    }
    
}
