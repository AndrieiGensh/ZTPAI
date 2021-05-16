import { Repository } from 'typeorm';
import { FoodDto } from '../food.dto';
import { FoodEntity } from '../models/food.entity';
export declare class FoodService {
    private foodRepo;
    constructor(foodRepo: Repository<FoodEntity>);
    create(food: FoodDto): Promise<FoodDto>;
    findAll(): Promise<FoodDto[]>;
}
