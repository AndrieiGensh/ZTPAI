import { Test, TestingModule } from '@nestjs/testing';
import { DietsDetailsService } from './diets-details.service';

describe('DietsDetailsService', () => {
  let service: DietsDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DietsDetailsService],
    }).compile();

    service = module.get<DietsDetailsService>(DietsDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
