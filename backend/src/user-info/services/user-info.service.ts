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

    findAll() : Promise<UserInfoEntity[]>
    {
        return this.userinfoRepo.find({relations: ["namesurname", "sex", "lifestyle"]});
    }

    findEquivalent(lifestyle: string, sex: string, name: string, surname:string): Promise<UserInfoDto>
    {
        return this.userinfoRepo.createQueryBuilder('ui')
        .leftJoin('ui.sex', 'sex').leftJoin('ui.lifestyle', 'lifestyle')
        .leftJoin('ui.namesurname', 'namesurname')
        .where('sex.name = :sex', {sex: sex}).andWhere('lifestyle.name = :lifestyle', {lifestyle: lifestyle})
        .andWhere('namesurname.name = :name', {name: name}).andWhere('namesurname.surname', {surname: surname})
        .getOne();
    }
}
