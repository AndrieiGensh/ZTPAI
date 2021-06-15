import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SexController } from './controllers/sex.controller';
import { SexEntity } from './models/sex.entity';
import { SexService } from './services/sex.service';

@Module({
  imports: [TypeOrmModule.forFeature([SexEntity])],
  controllers: [SexController],
  providers: [SexService],
  exports: [SexService]
})
export class SexModule {}
