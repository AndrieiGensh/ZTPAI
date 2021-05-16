/* eslint-disable prettier/prettier */
import { FoodEntity } from 'src/food/models/food.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MeasureUnitsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => FoodEntity, (food : FoodEntity) => food.measureUnits)
  food: FoodEntity[];

}