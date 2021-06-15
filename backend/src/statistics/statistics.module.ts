/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { StatisticsController } from './controllers/statistics.controller';
import { StatisticsEntity } from './models/statistics.entity';
import { StatisticsService } from './services/statistics.service';

@Module({
  imports: [TypeOrmModule.forFeature([StatisticsEntity]),
    UsersModule
  ],
  controllers: [StatisticsController],
  providers: [StatisticsService],
  exports: [StatisticsService]
})
export class StatisticsModule {}
