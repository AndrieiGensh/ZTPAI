/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MealTypesDto } from '../meal-types.dto';
import { MealTypesEntity } from '../models/meal-types.entity';

@Injectable()
export class MealTypesService {
    constructor(
        @InjectRepository(MealTypesEntity) private mTypesRepo: Repository<MealTypesEntity>
    )
    {}

    async getByName(name: string): Promise<MealTypesDto>
    {
        return this.mTypesRepo.createQueryBuilder('mt')
        .where('mt.name = :mealTypeName', {mealTypeName: name})
        .getOne();
    }

    async addNewType(type: MealTypesDto): Promise<MealTypesDto>
    {
        return this.mTypesRepo.save(type);
    }

    async getAll(): Promise<MealTypesDto[]>
    {
        return this.mTypesRepo.find();
    }
}
