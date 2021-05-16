import { DietsEntity } from 'src/diets/models/diets.entity';
import { FoodEntity } from 'src/food/models/food.entity';
export declare class DietProductsEntity {
    id: number;
    status: boolean;
    food: FoodEntity;
    diet: DietsEntity;
}
