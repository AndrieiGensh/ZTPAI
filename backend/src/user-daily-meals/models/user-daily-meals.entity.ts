/* eslint-disable prettier/prettier */
import { FoodEntity } from 'src/food/models/food.entity';
import { MealTypesEntity } from 'src/meal-types/models/meal-types.entity';
import { UserEntity } from 'src/users/models/users.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity()
export class UserDailyMealsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, (user : UserEntity) => user.userDailyMeals,
    { onDelete: 'CASCADE' })
    user: UserEntity;

    @ManyToOne(() => FoodEntity, (meal: FoodEntity) => meal.userDailyMeals,
    { onDelete: 'CASCADE' })
    meal: FoodEntity;

    @ManyToOne(() => MealTypesEntity, (mealType : MealTypesEntity) => mealType.userDailyMeals,
    { onDelete: 'CASCADE' })
    mealType: MealTypesEntity;

    @Column({type: 'float'})
    amount_of_units: number;
}