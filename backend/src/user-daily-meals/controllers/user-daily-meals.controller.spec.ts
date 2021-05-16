import { Test, TestingModule } from '@nestjs/testing';
import { UserDailyMealsController } from './user-daily-meals.controller';

describe('UserDailyMealsController', () => {
  let controller: UserDailyMealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDailyMealsController],
    }).compile();

    controller = module.get<UserDailyMealsController>(UserDailyMealsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
