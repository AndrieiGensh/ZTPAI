import { MeasureUnitsDto } from 'src/measure-units/measure-units.dto';
export declare class CreateFoodDto {
    name: string;
    kcalPerUnit: number;
    fatsPerUnit: number;
    carbsPerUnit: number;
    proteinsPerUnit: number;
    measureUnits: MeasureUnitsDto;
}
