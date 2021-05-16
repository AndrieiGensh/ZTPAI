/* eslint-disable prettier/prettier */
import { UserInfoEntity } from 'src/user-info/models/user-info.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class LifestyleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true , length: 20})
  name: string;

  @Column()
  factor: number;

  @OneToMany(() => UserInfoEntity, (userInfo : UserInfoEntity) => userInfo.lifestyle)
  userInfo: UserInfoEntity[];
}