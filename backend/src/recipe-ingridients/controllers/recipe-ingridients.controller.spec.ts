import { Test, TestingModule } from '@nestjs/testing';
import { RecipeIngridientsController } from './recipe-ingridients.controller';

describe('RecipeIngridientsController', () => {
  let controller: RecipeIngridientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeIngridientsController],
    }).compile();

    controller = module.get<RecipeIngridientsController>(RecipeIngridientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
