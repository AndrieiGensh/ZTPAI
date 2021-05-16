import { Module } from '@nestjs/common';
import { DietProductsController } from './controllers/diet-products.controller';
import { DietProductsService } from './services/diet-products.service';

@Module({
  controllers: [DietProductsController],
  providers: [DietProductsService],
})
export class DietProductsModule {}
