/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/users/models/users.entity';
import { PostEntity } from 'src/post/models/post.entity';

@Entity()
export class CommentEntity {
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

  @ManyToOne(() => UserEntity, user => user.comments)
  user: UserEntity;

  @ManyToOne(() => PostEntity, (post : PostEntity) => post.comments)
  post: PostEntity;
}