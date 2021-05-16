/* eslint-disable prettier/prettier */
import { UserEntity } from 'src/users/models/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class StatisticsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column( { type: 'timestamptz' } )
  date: Date;

  @Column()
  kcal: number;

  @Column()
  fats: number;

  @Column()
  carbs: number;

  @Column()
  proteins: number;

  @ManyToOne(() => UserEntity, (user : UserEntity) => user.stats)
  user: UserEntity;

}