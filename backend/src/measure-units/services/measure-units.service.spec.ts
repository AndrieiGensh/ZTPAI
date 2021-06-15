import { Test, TestingModule } from '@nestjs/testing';
import { MeasureUnitsService } from './measure-units.service';

describe('MeasureUnitsService', () => {
  let service: MeasureUnitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeasureUnitsService],
    }).compile();

    service = module.get<MeasureUnitsService>(MeasureUnitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
