import { DietsEntity } from 'src/diets/models/diets.entity';
export declare class DietsDetailsEntity {
    id: number;
    Kcal_daily: number;
    Proteins_daily: number;
    Fats_daily: number;
    Carbs_daily: number;
    diets: DietsEntity[];
}
