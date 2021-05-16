import { DietProductsEntity } from 'src/diet-products/models/diet-products.entity';
import { DietsDetailsEntity } from 'src/diets-details/models/diets-details.entity';
import { UserEntity } from 'src/users/models/users.entity';
export declare class DietsEntity {
    id: number;
    name: string;
    kcalPerDay: number;
    fatsPerDay: number;
    carbsPerDay: number;
    proteinsPerDay: number;
    dietProducts: DietProductsEntity[];
    dietsDetails: DietsDetailsEntity;
    users: UserEntity[];
}
