/* eslint-disable prettier/prettier */
import { UserEntity } from 'src/users/models/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class SettingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => UserEntity, (user : UserEntity) => user.settings,
  { onDelete: 'CASCADE' })
  users: UserEntity[];
}