import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoController } from './controllers/user-info.controller';
import { UserInfoEntity } from './models/user-info.entity';
import { UserInfoService } from './services/user-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfoEntity])],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
