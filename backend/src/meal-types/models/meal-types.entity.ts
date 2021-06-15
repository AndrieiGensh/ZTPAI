/* eslint-disable prettier/prettier */
import { UserDailyMealsEntity } from 'src/user-daily-meals/models/user-daily-meals.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MealTypesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => UserDailyMealsEntity, (userDailyMeals : UserDailyMealsEntity) => userDailyMeals.mealType)
  userDailyMeals: UserDailyMealsEntity[];
}