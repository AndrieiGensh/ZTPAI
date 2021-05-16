/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserInfoService } from '../services/user-info.service';
import { UserInfoDto } from '../user-info.dto';

@Controller('user-info')
export class UserInfoController {
    constructor(private userinfoService : UserInfoService)
    {
    }

    @Get()
    async findAll() : Promise<UserInfoDto[]>
    {
        return this.userinfoService.findAll();
    }

    @Post()
    create(@Body() userinfo : UserInfoDto) : Promise<UserInfoDto>
    {
        return this.userinfoService.create(userinfo);
    }
}
