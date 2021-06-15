/* eslint-disable prettier/prettier */
import { DietProductsEntity } from 'src/diet-products/models/diet-products.entity';
import { UserDailyMealsEntity } from 'src/user-daily-meals/models/user-daily-meals.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { MeasureUnitsEntity } from '../../measure-units/models/measure-units.entity';
import { RecipeIngridientsEntity } from '../../recipe-ingridients/models/recipe-ingridients.entity';

@Entity()
export class FoodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  name: string;

  @Column({type: 'float'})
  kcalPerUnit;

  @Column({type: 'float'})
  fatsPerUnit;

  @Column({type: 'float'})
  carbsPerUnit;

  @Column({type: 'float'})
  proteinsPerUnit;

  @ManyToOne(() => MeasureUnitsEntity, (measureUnit : MeasureUnitsEntity) => measureUnit.food,
  { onDelete: 'CASCADE' })
  measureUnits: MeasureUnitsEntity;

  @OneToMany(() => RecipeIngridientsEntity, recipe_ingridients => recipe_ingridients.ingridient)
  recipe_ingridients: RecipeIngridientsEntity[];

  @OneToMany(() => UserDailyMealsEntity, (userDailyMeals : UserDailyMealsEntity) => userDailyMeals.meal)
  userDailyMeals: UserDailyMealsEntity[];

  @OneToMany(() => DietProductsEntity, (dietProducts : DietProductsEntity) => dietProducts.diet)
  dietProducts: DietProductsEntity[];
}