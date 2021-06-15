/* eslint-disable prettier/prettier */
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealTypesController } from './controllers/meal-types.controller';
import { MealTypesEntity } from './models/meal-types.entity';
import { MealTypesService } from './services/meal-types.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([MealTypesEntity]),
  forwardRef(() => UsersModule),
  ],
  controllers: [MealTypesController],
  providers: [MealTypesService],
  exports: [MealTypesService]
})
export class MealTypesModule {}
