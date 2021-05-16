import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDailyMealsController } from './controllers/user-daily-meals.controller';
import { UserDailyMealsEntity } from './models/user-daily-meals.entity';
import { UserDailyMealsService } from './services/user-daily-meals.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDailyMealsEntity])],
  controllers: [UserDailyMealsController],
  providers: [UserDailyMealsService],
})
export class UserDailyMealsModule {}
