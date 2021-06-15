import { Test, TestingModule } from '@nestjs/testing';
import { DietProductsService } from './diet-products.service';

describe('DietProductsService', () => {
  let service: DietProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DietProductsService],
    }).compile();

    service = module.get<DietProductsService>(DietProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
