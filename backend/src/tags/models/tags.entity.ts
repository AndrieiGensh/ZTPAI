/* eslint-disable prettier/prettier */
import { RecipeEntity } from 'src/recipe/models/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class TagsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true , length: 20})
  tag_name: string;

  @ManyToMany(() => RecipeEntity, (recipe: RecipeEntity) => recipe.tags)
  @JoinTable()
  recipes: RecipeEntity[];
}