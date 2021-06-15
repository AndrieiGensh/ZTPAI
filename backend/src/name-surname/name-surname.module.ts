import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NameSurnameController } from './controllers/name-surname.controller';
import { NameSurnameEntity } from './models/name-surname.entity';
import { NameSurnameService } from './services/name-surname.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([NameSurnameEntity]),
  forwardRef(() => UsersModule),
  ],
  controllers: [NameSurnameController],
  providers: [NameSurnameService],
  exports: [NameSurnameService]
})
export class NameSurnameModule {}
