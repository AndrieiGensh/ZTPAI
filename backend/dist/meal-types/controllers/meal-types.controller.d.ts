import { MealTypesDto } from '../meal-types.dto';
import { MealTypesService } from '../services/meal-types.service';
export declare class MealTypesController {
    private mealtypesService;
    constructor(mealtypesService: MealTypesService);
    addnewtype(type: MealTypesDto): Promise<MealTypesDto>;
    getAll(): Promise<MealTypesDto[]>;
}
