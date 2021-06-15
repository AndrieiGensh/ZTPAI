import { Module } from '@nestjs/common';
import { DietsController } from './controllers/diets.controller';
import { DietsService } from './services/diets.service';

@Module({
  controllers: [DietsController],
  providers: [DietsService],
})
export class DietsModule {}
