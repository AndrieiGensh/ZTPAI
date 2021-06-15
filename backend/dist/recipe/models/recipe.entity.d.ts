import { RecipeIngridientsEntity } from 'src/recipe-ingridients/models/recipe-ingridients.entity';
import { TagsEntity } from 'src/tags/models/tags.entity';
export declare class RecipeEntity {
    id: number;
    description: string;
    recipe_ingridients: RecipeIngridientsEntity[];
    tags: TagsEntity[];
}
