/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { AuthService } from 'src/auth/services/auth.service';
import { UsersController } from './controllers/users.controller';
import { UserEntity } from './models/users.entity';
import { UsersService } from './services/users.service';
import { NameSurnameModule } from 'src/name-surname/name-surname.module';
import { UserInfoModule } from 'src/user-info/user-info.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => AuthModule),
    UserInfoModule,
    NameSurnameModule
  ],
  controllers: [UsersController],
  providers: [UsersService, LocalAuthGuard],
  exports: [UsersService]
})
export class UsersModule {}
