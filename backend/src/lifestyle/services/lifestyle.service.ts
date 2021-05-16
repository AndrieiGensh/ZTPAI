/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LifestyleDto } from '../lifestyle.dto';
import { LifestyleEntity } from '../models/lifestyle.entity';

@Injectable()
export class LifestyleService {
    constructor(
        @InjectRepository(LifestyleEntity) 
        private lifestyleRepo: Repository<LifestyleEntity>
    ){}

    create(lifestyle: LifestyleDto) : Promise<LifestyleDto>
    {
        return this.lifestyleRepo.save(lifestyle);
    }

    findAll() : Promise<LifestyleDto[]>
    {
        return this.lifestyleRepo.find();
    }

}
