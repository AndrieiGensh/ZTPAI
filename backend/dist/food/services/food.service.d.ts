import { MeasureUnitsService } from 'src/measure-units/services/measure-units.service';
import { Repository } from 'typeorm';
import { CreateFoodDto } from '../create-food.dto';
import { FoodDto } from '../food.dto';
import { FoodEntity } from '../models/food.entity';
export declare class FoodService {
    private foodRepo;
    private muService;
    constructor(foodRepo: Repository<FoodEntity>, muService: MeasureUnitsService);
    create(food: FoodDto): Promise<CreateFoodDto>;
    findAll(): Promise<FoodDto[]>;
    findByName(name: string): Promise<FoodDto>;
    findEntityByName(name: string): Promise<CreateFoodDto>;
}
