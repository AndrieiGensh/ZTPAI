/* eslint-disable prettier/prettier */
import { Module, forwardRef} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasureUnitsController } from './controllers/measure-units.controller';
import { MeasureUnitsEntity } from './models/measure-units.entity';
import { MeasureUnitsService } from './services/measure-units.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([MeasureUnitsEntity]),
  forwardRef(() => UsersModule),
  ],
  controllers: [MeasureUnitsController],
  providers: [MeasureUnitsService],
  exports: [MeasureUnitsService]
})
export class MeasureUnitsModule {}
