import { CreateFoodDto } from '../create-food.dto';
import { FoodDto } from '../food.dto';
import { FoodService } from '../services/food.service';
export declare class FoodController {
    private foodService;
    constructor(foodService: FoodService);
    create(food: FoodDto): Promise<CreateFoodDto>;
    findAll(): Promise<FoodDto[]>;
    findOneByName(name: string): Promise<FoodDto>;
}
