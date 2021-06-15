/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NameSurnameEntity } from '../models/name-surname.entity';
import { NameSurnameDto } from '../name-surname.dto';

@Injectable()
export class NameSurnameService {
    constructor(@InjectRepository(NameSurnameEntity) private namesurnameRepo: Repository<NameSurnameEntity>)
    {}

    create(namesurname : NameSurnameDto) : Promise<NameSurnameDto>
    {
        return this.namesurnameRepo.save(namesurname);
    }

    findAll() : Promise<NameSurnameDto[]>
    {
        return this.namesurnameRepo.find();
    }

    async findByNameSurnameCombination(name: string, surname: string): Promise<NameSurnameDto>
    {
        return this.namesurnameRepo.createQueryBuilder('ns')
        .where('ns.name = :name', {name: name})
        .andWhere('ns.surname = :surname', {surname: surname})
        .getOne();
    }
}
