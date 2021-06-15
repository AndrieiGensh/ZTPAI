import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './controllers/comment.controller';
import { CommentEntity } from './models/comment.entity';
import { CommentService } from './services/comment.service';
import { UsersModule } from 'src/users/users.module';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]),
  UsersModule,
  PostModule
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
