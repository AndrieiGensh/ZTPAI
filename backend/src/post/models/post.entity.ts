/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, BeforeInsert } from 'typeorm';
import { UserEntity } from 'src/users/models/users.entity';
import { CommentEntity } from 'src/comment/models/comment.entity';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({update: false})
  date: Date;

  @Column()
  content: string;

  @Column()
  title: string;

  @Column()
  photoPath: string;

  @Column()
  likes: number;

  @Column()
  dislikes: number;

  @Column()
  hashtags: string;

  @ManyToOne(() => UserEntity, user => user.posts,
  { onDelete: 'CASCADE' })
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comments : CommentEntity) => comments.post)
  comments: CommentEntity[];

  @BeforeInsert()
  setDate()
  {
    this.date = new Date(Date.now().toLocaleString());
  }
}