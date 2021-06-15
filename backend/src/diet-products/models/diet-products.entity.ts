/* eslint-disable prettier/prettier */
import { DietsEntity } from 'src/diets/models/diets.entity';
import { FoodEntity } from 'src/food/models/food.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class DietProductsEntity {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ unique: true })
  status: boolean;

  @ManyToOne(() => FoodEntity, (food : FoodEntity) => food.dietProducts,
  { onDelete: 'CASCADE' })
  food: FoodEntity;

  @ManyToOne(() => DietsEntity, (diet : DietsEntity) => diet.dietProducts,
  { onDelete: 'CASCADE' })
  diet: DietsEntity;
}