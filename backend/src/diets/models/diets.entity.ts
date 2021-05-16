/* eslint-disable prettier/prettier */
import { DietProductsEntity } from 'src/diet-products/models/diet-products.entity';
import { DietsDetailsEntity } from 'src/diets-details/models/diets-details.entity';
import { UserEntity } from 'src/users/models/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class DietsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  kcalPerDay: number;

  @Column()
  fatsPerDay: number;

  @Column()
  carbsPerDay: number;

  @Column()
  proteinsPerDay: number;

  @OneToMany(() => DietProductsEntity, (dietProducts : DietProductsEntity) => dietProducts.diet)
  dietProducts: DietProductsEntity[];

  @ManyToOne(() => DietsDetailsEntity, (dietsDetails : DietsDetailsEntity) => dietsDetails.diets)
  dietsDetails: DietsDetailsEntity;

  @ManyToMany(() => UserEntity, (user : UserEntity) => user.diets)
  users: UserEntity[];
}