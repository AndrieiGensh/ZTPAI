import { Test, TestingModule } from '@nestjs/testing';
import { MeasureUnitsController } from './measure-units.controller';

describe('MeasureUnitsController', () => {
  let controller: MeasureUnitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeasureUnitsController],
    }).compile();

    controller = module.get<MeasureUnitsController>(MeasureUnitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
