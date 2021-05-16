/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodDto } from '../food.dto';
import { FoodEntity } from '../models/food.entity';

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(FoodEntity)
        private foodRepo: Repository<FoodEntity>
    ) {}
    
    create(food: FoodDto) : Promise<FoodDto>
    {
        return this.foodRepo.save(food);
    }

    findAll() : Promise<FoodDto[]>
    {
        return this.foodRepo.find();
    }

}
