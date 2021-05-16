import { Module } from '@nestjs/common';
import { FoodService } from './services/food.service';
import { FoodController } from './controllers/food.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodEntity } from './models/food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoodEntity])],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
