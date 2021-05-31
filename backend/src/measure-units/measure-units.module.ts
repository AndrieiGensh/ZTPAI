/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasureUnitsController } from './controllers/measure-units.controller';
import { MeasureUnitsEntity } from './models/measure-units.entity';
import { MeasureUnitsService } from './services/measure-units.service';

@Module({
  imports: [TypeOrmModule.forFeature([MeasureUnitsEntity])],
  controllers: [MeasureUnitsController],
  providers: [MeasureUnitsService],
  exports: [MeasureUnitsService]
})
export class MeasureUnitsModule {}
