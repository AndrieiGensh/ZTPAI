import { UserDto } from 'src/users/user.dto';
export declare class CreateStatsDto {
    date: Date;
    kcal: number;
    fats: number;
    carbs: number;
    proteins: number;
    user: UserDto;
}
