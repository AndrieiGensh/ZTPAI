/* eslint-disable prettier/prettier */
import { RecipeIngridientsEntity } from 'src/recipe-ingridients/models/recipe-ingridients.entity';
import { TagsEntity } from 'src/tags/models/tags.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';

@Entity()
export class RecipeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(() => RecipeIngridientsEntity, recipe_ingridients => recipe_ingridients.recipe)
  recipe_ingridients: RecipeIngridientsEntity[];

  @ManyToMany(() => TagsEntity, (tag: TagsEntity) => tag.recipes)
  tags: TagsEntity[];
}