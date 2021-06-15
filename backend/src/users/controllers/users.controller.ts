/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import { Get } from '@nestjs/common';
import { Post, Delete, Put } from '@nestjs/common';
import { Body, Request, Query } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
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
        const jwt = await this.userService.login(user);
        return { access_token: jwt, expiresIn: '100'};
    }

    @UseGuards(JwtGuard)
    @Get('userInfo')
    async getUserInfo(@AuthUser() user): Promise<Object>
    {
        return this.userService.getUserInfo(user.userId);
    }

    @UseGuards(JwtGuard)
    @Put('userInfo')
    async changeUserInfo(@AuthUser() user, @Body() body): Promise<boolean>
    {
        return this.userService.changeUserInfo(user.userId, body.name, body.surname);
    }

    @UseGuards(JwtGuard)
    @Get('password-verification')
    async verifyPassword(@AuthUser() user, @Query() query): Promise<boolean>
    {
        return this.userService.verifyPassword(user.userId, query.password);
    }

    @UseGuards(JwtGuard)
    @Put('password-change')
    async changePassword(@AuthUser() user, @Body() body): Promise<boolean>
    {
        return this.userService.changePassword(user.userId, body.password);
    }

    @UseGuards(JwtGuard)
    @Delete('delete')
    async deleteAccount(@AuthUser() user): Promise<boolean>
    {
        return this.userService.deleteUser(user.userId);
    }

}
