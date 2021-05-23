/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import { Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserEntity } from '../models/users.entity';
import { UsersService } from '../services/users.service';
import { UserDto } from '../user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService)
    {
    }

    @Get()
    async findAll() : Promise<UserEntity[]>
    {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() userinfo : UserDto) : Promise<UserDto>
    {
        return this.userService.create(userinfo);
    }

    @Post('login')
    async login(@Body() user: UserDto) : Promise<Object>
    {
        const jwt = await this.userService.login(user);
        return { acces_token: jwt};
    }
}
