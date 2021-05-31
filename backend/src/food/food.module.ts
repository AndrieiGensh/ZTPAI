/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FoodService } from './services/food.service';
import { FoodController } from './controllers/food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodEntity } from './models/food.entity';
import { MeasureUnitsService } from 'src/measure-units/services/measure-units.service';
import { MeasureUnitsModule } from 'src/measure-units/measure-units.module';

@Module({
  imports: [TypeOrmModule.forFeature([FoodEntity]), MeasureUnitsModule],
  controllers: [FoodController],
  providers: [FoodService],
  exports: [FoodService]
})
export class FoodModule {}
