import { Test, TestingModule } from '@nestjs/testing';
import { NameSurnameService } from './name-surname.service';

describe('NameSurnameService', () => {
  let service: NameSurnameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NameSurnameService],
    }).compile();

    service = module.get<NameSurnameService>(NameSurnameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
