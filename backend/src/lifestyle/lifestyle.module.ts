import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifestyleController } from './controllers/lifestyle.controller';
import { LifestyleEntity } from './models/lifestyle.entity';
import { LifestyleService } from './services/lifestyle.service';

@Module({
  imports: [TypeOrmModule.forFeature([LifestyleEntity])],
  controllers: [LifestyleController],
  providers: [LifestyleService],
})
export class LifestyleModule {}
