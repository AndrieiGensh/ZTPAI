/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { NameSurnameEntity } from '../../name-surname/models/name-surname.entity';
import { SexEntity } from '../../sex/models/sex.entity';
import { LifestyleEntity } from '../../lifestyle/models/lifestyle.entity';
import { UserEntity } from 'src/users/models/users.entity';

@Entity()
export class UserInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @OneToMany(() => UserEntity, (user : UserEntity) => user.userInfo)
  user: UserEntity;

  @ManyToOne(() => NameSurnameEntity, (namesurname : NameSurnameEntity) => namesurname.userInfo)
  namesurname: NameSurnameEntity;

  @ManyToOne(() => SexEntity, (sex : SexEntity) => sex.userInfo)
  sex: SexEntity;

  @ManyToOne(() => LifestyleEntity, (lifestyle : LifestyleEntity) => lifestyle.userInfo)
  lifestyle: LifestyleEntity;
}