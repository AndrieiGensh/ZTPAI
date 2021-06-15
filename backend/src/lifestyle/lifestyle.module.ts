import { Module, forwardRef} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifestyleController } from './controllers/lifestyle.controller';
import { LifestyleEntity } from './models/lifestyle.entity';
import { LifestyleService } from './services/lifestyle.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([LifestyleEntity]),
  forwardRef(() => UsersModule),
  ],
  controllers: [LifestyleController],
  providers: [LifestyleService],
})
export class LifestyleModule {}
