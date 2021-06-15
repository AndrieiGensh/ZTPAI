import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './controllers/post.controller';
import { PostEntity } from './models/post.entity';
import { PostService } from './services/post.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
  TypeOrmModule.forFeature([PostEntity]),
  UsersModule
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService]
})
export class PostModule {}
