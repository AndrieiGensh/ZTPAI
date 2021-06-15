/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserInfoEntity } from '../models/user-info.entity';
import { UserInfoService } from '../services/user-info.service';
import { UserInfoDto } from '../user-info.dto';

@Controller('user-info')
export class UserInfoController {
    constructor(private userinfoService : UserInfoService)
    {
    }

    @Get()
    async findAll() : Promise<UserInfoEntity[]>
    {
        return this.userinfoService.findAll();
    }

    @Post()
    create(@Body() userinfo : UserInfoDto) : Promise<UserInfoDto>
    {
        return this.userinfoService.create(userinfo);
    }
}
