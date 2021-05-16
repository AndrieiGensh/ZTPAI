import { UserEntity } from 'src/users/models/users.entity';
export declare class StatisticsEntity {
    id: number;
    date: Date;
    kcal: number;
    fats: number;
    carbs: number;
    proteins: number;
    user: UserEntity;
}
