import { FoodEntity } from 'src/food/models/food.entity';
import { RecipeEntity } from 'src/recipe/models/recipe.entity';
export declare class RecipeIngridientsEntity {
    id: number;
    amount_of_units: number;
    recipe: RecipeEntity;
    ingridient: FoodEntity;
}
