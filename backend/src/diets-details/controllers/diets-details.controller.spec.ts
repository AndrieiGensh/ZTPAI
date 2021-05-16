import { Test, TestingModule } from '@nestjs/testing';
import { DietsDetailsController } from './diets-details.controller';

describe('DietsDetailsController', () => {
  let controller: DietsDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DietsDetailsController],
    }).compile();

    controller = module.get<DietsDetailsController>(DietsDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
