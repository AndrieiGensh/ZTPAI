import { Test, TestingModule } from '@nestjs/testing';
import { UserDailyMealsService } from './user-daily-meals.service';

describe('UserDailyMealsService', () => {
  let service: UserDailyMealsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDailyMealsService],
    }).compile();

    service = module.get<UserDailyMealsService>(UserDailyMealsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
