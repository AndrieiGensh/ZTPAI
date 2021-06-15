/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodModule } from 'src/food/food.module';
import { MealTypesModule } from 'src/meal-types/meal-types.module';
import { MeasureUnitsModule } from 'src/measure-units/measure-units.module';
import { StatisticsModule } from 'src/statistics/statistics.module';
import { UsersModule } from 'src/users/users.module';
import { UserDailyMealsController } from './controllers/user-daily-meals.controller';
import { UserDailyMealsEntity } from './models/user-daily-meals.entity';
import { UserDailyMealsService } from './services/user-daily-meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDailyMealsEntity]), 
  StatisticsModule, 
  UsersModule,
  FoodModule,
  MealTypesModule,
  MeasureUnitsModule
  ],
  controllers: [UserDailyMealsController],
  providers: [UserDailyMealsService],
})
export class UserDailyMealsModule {}
