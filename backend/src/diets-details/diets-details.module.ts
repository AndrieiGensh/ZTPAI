import { Module } from '@nestjs/common';
import { DietsDetailsController } from './controllers/diets-details.controller';
import { DietsDetailsService } from './services/diets-details.service';

@Module({
  controllers: [DietsDetailsController],
  providers: [DietsDetailsService],
})
export class DietsDetailsModule {}
