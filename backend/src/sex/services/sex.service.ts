/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SexEntity } from '../models/sex.entity';
import { SexDto } from '../sex.dto';

@Injectable()
export class SexService {
    constructor(@InjectRepository(SexEntity) private sexRepo: Repository<SexEntity>)
    {}

    create(sex : SexDto) : Promise<SexDto>
    {
        return this.sexRepo.save(sex);
    }

    findAll() : Promise<SexDto[]>
    {
        return this.sexRepo.find();
    }
}
