/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfoEntity } from '../models/user-info.entity';
import { UserInfoDto } from '../user-info.dto';

@Injectable()
export class UserInfoService {
    constructor(@InjectRepository(UserInfoEntity) private userinfoRepo : Repository<UserInfoEntity>)
    {
        
    }

    create(userinfo : UserInfoDto) : Promise<UserInfoDto>
    {
        return this.userinfoRepo.save(userinfo);
    }

    findAll() : Promise<UserInfoDto[]>
    {
        return this.userinfoRepo.find();
    }
}
