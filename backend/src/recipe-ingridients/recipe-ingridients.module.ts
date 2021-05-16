import { Module } from '@nestjs/common';
import { RecipeIngridientsController } from './controllers/recipe-ingridients.controller';
import { RecipeIngridientsService } from './services/recipe-ingridients.service';

@Module({
  controllers: [RecipeIngridientsController],
  providers: [RecipeIngridientsService],
})
export class RecipeIngridientsModule {}
