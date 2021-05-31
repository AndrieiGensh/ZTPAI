/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeasureUnitsDto } from '../create-measure-units.dto';
import { MeasureUnitsDto } from '../measure-units.dto';
import { MeasureUnitsEntity } from '../models/measure-units.entity';

@Injectable()
export class MeasureUnitsService 
{
    constructor(
        @InjectRepository(MeasureUnitsEntity)
        private muRepo: Repository<MeasureUnitsEntity>
    ){};

    async createUnit(newUnit: CreateMeasureUnitsDto) : Promise<MeasureUnitsDto>
    {
        return this.muRepo.save(newUnit);
    }

    async getByName(name: string): Promise<MeasureUnitsDto | null>
    {
        console.log("THE NAME OF UNIT TO SEARCH FOR IS ", name);
        return await this.muRepo.createQueryBuilder('mu')
        .addSelect('mu.id').addSelect('mu.name').where('mu.name = :muName', {muName: name})
        .getOne();
    }
}
