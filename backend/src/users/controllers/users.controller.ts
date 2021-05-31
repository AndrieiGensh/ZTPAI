/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import { Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body, Request } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { PostFilters } from 'src/post/models/post-filters';
import { UserEntity } from '../models/users.entity';
import { UsersService } from '../services/users.service';
import { UserDto } from '../user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService)
    {
    }

    @UseGuards(JwtGuard)
    @Get()
    async findAll() : Promise<UserEntity[]>
    {
        return this.userService.findAll();
    }

    @Post('register')
    async register(@Body() user : UserDto) : Promise<any>
    {
        const token =  await this.userService.create(user);
        return {access_token : token, expiresIn: '100'};
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() user : UserDto) : Promise<Object>
    {
        console.log("Before login methods");
        const jwt = await this.userService.login(user);
        return { access_token: jwt, expiresIn: '100'};
    }
}
