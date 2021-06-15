import { Test, TestingModule } from '@nestjs/testing';
import { RecipeIngridientsService } from './recipe-ingridients.service';

describe('RecipeIngridientsService', () => {
  let service: RecipeIngridientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeIngridientsService],
    }).compile();

    service = module.get<RecipeIngridientsService>(RecipeIngridientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
