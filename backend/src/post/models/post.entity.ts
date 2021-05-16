/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from 'src/users/models/users.entity';
import { CommentEntity } from 'src/comment/models/comment.entity';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  content: string;

  @Column()
  likes: number;

  @Column()
  dislikes: number;

  @ManyToOne(() => UserEntity, user => user.posts)
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comments : CommentEntity) => comments.post)
  comments: CommentEntity[];
}