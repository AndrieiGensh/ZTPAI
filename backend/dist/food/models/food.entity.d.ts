import { DietProductsEntity } from 'src/diet-products/models/diet-products.entity';
import { UserDailyMealsEntity } from 'src/user-daily-meals/models/user-daily-meals.entity';
import { MeasureUnitsEntity } from '../../measure-units/models/measure-units.entity';
import { RecipeIngridientsEntity } from '../../recipe-ingridients/models/recipe-ingridients.entity';
export declare class FoodEntity {
    id: number;
    name: string;
    kcalPerUnit: number;
    fatsPerUnit: number;
    carbsPerUnit: number;
    proteinsPerUnit: number;
    measureUnits: MeasureUnitsEntity;
    recipe_ingridients: RecipeIngridientsEntity[];
    userDailyMeals: UserDailyMealsEntity[];
    dietProducts: DietProductsEntity[];
}
