import { Repository } from 'typeorm';
import { MealTypesDto } from '../meal-types.dto';
import { MealTypesEntity } from '../models/meal-types.entity';
export declare class MealTypesService {
    private mTypesRepo;
    constructor(mTypesRepo: Repository<MealTypesEntity>);
    getByName(name: string): Promise<MealTypesDto>;
    addNewType(type: MealTypesDto): Promise<MealTypesDto>;
    getAll(): Promise<MealTypesDto[]>;
}
