/* eslint-disable prettier/prettier */
import { FoodEntity } from 'src/food/models/food.entity';
import { RecipeEntity } from 'src/recipe/models/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class RecipeIngridientsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount_of_units: number;

  @ManyToOne(() => RecipeEntity, recipe => recipe.recipe_ingridients, { primary : true, onDelete: 'CASCADE'})
  recipe: RecipeEntity;

  @ManyToOne(() => FoodEntity, ingridient => ingridient.recipe_ingridients, { primary : true, onDelete: 'CASCADE'})
  ingridient: FoodEntity;

}