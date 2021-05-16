import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealTypesController } from './controllers/meal-types.controller';
import { MealTypesEntity } from './models/meal-types.entity';
import { MealTypesService } from './services/meal-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([MealTypesEntity])],
  controllers: [MealTypesController],
  providers: [MealTypesService],
})
export class MealTypesModule {}
