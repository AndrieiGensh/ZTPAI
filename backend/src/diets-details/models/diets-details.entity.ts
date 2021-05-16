/* eslint-disable prettier/prettier */
import { DietsEntity } from 'src/diets/models/diets.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class DietsDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Kcal_daily: number;
  
  @Column()
  Proteins_daily: number;

  @Column()
  Fats_daily: number;

  @Column()
  Carbs_daily: number;  

  @OneToMany(() => DietsEntity, (diet: DietsEntity) => diet.dietsDetails)
  diets: DietsEntity[]; 
}