import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NameSurnameController } from './controllers/name-surname.controller';
import { NameSurnameEntity } from './models/name-surname.entity';
import { NameSurnameService } from './services/name-surname.service';

@Module({
  imports: [TypeOrmModule.forFeature([NameSurnameEntity])],
  controllers: [NameSurnameController],
  providers: [NameSurnameService],
})
export class NameSurnameModule {}
