import { RecipeEntity } from 'src/recipe/models/recipe.entity';
export declare class TagsEntity {
    id: number;
    tag_name: string;
    recipes: RecipeEntity[];
}
