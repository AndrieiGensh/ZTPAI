/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/users.entity';
import { UserDto } from '../user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private userRepo : Repository<UserEntity>)
    {

    }

    create(user : UserDto) : Promise<UserDto>
    {
        return this.userRepo.save(user);
    }

    findAll() : Promise<UserEntity[]>
    {
        //return this.userRepo.find({ relations: ["userInfo", ""]});
        return this.userRepo.createQueryBuilder("u").
            leftJoinAndSelect("u.userInfo", "usIn").
            leftJoinAndSelect("usIn.sex", "usSex").
            leftJoinAndSelect("usIn.namesurname", "usNamesurname").
            leftJoinAndSelect("usIn.lifestyle", "usLifestyle").
            getMany();
    }
}
