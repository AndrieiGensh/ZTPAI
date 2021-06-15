import { Test, TestingModule } from '@nestjs/testing';
import { NameSurnameController } from './name-surname.controller';

describe('NameSurnameController', () => {
  let controller: NameSurnameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NameSurnameController],
    }).compile();

    controller = module.get<NameSurnameController>(NameSurnameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
