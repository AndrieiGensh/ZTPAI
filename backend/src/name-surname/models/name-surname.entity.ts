/* eslint-disable prettier/prettier */
import { UserInfoEntity } from 'src/user-info/models/user-info.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class NameSurnameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100})
  name: string;

  @Column({ length: 100})
  surname: string;

  @OneToMany(() => UserInfoEntity, (userInfo : UserInfoEntity) => userInfo.namesurname)
  userInfo: UserInfoEntity[];
}