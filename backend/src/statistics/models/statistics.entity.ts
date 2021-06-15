/* eslint-disable prettier/prettier */
import { UserEntity } from 'src/users/models/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class StatisticsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column( { type: 'date' } )
  date: Date;

  @Column({type: 'float'})
  kcal: number;

  @Column({type: 'float'})
  fats: number;

  @Column({type: 'float'})
  carbs: number;

  @Column({type: 'float'})
  proteins: number;

  @ManyToOne(() => UserEntity, (user : UserEntity) => user.stats,
  { onDelete: 'CASCADE' })
  user: UserEntity;

}