import { Test, TestingModule } from '@nestjs/testing';
import { DietProductsController } from './diet-products.controller';

describe('DietProductsController', () => {
  let controller: DietProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DietProductsController],
    }).compile();

    controller = module.get<DietProductsController>(DietProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
