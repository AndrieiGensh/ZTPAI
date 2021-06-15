/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { UserDailyMealsService } from '../services/user-daily-meals.service';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { hasRoles } from 'src/auth/decorators/roles.decorator';

@Controller('user-daily-meals')
export class UserDailyMealsController {
    constructor(
        private userMealsService: UserDailyMealsService
    )
    {}

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get()
    async getDataForUser(@AuthUser() user: any, @Query() query): Promise<any>
    {
        return this.userMealsService.getMealsForUser(user.userId, query.mealType);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Post()
    async addNewMealForUser(@AuthUser() user, @Body() body): Promise<any>
    {
        return this.userMealsService.addNewMeal(user.userId, body.foodName, body.type, body.amount, body.date);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Put()
    async updateUserMealsRecords(@AuthUser() user, @Body() body): Promise<any>
    {
        return this.userMealsService.updateUsersMealAndStats(user.userId, body.recordId, body.amount, body.date);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Delete()
    async deleteRecord(@AuthUser() user, @Query() query): Promise<any>
    {
        return this.userMealsService.deleteUsersMeal(query.recordId, user.userId, query.date);
    }
    
}
