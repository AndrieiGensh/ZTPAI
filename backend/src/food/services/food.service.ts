/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMeasureUnitsDto } from 'src/measure-units/create-measure-units.dto';
import { MeasureUnitsDto } from 'src/measure-units/measure-units.dto';
import { MeasureUnitsService } from 'src/measure-units/services/measure-units.service';
import { Repository } from 'typeorm';
import { CreateFoodDto } from '../create-food.dto';
import { FoodDto } from '../food.dto';
import { FoodEntity } from '../models/food.entity';

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(FoodEntity)
        private foodRepo: Repository<FoodEntity>,
        private muService: MeasureUnitsService
    ) {}
    
    async create(food: FoodDto) : Promise<CreateFoodDto>
    {
        console.log("IN THE FOOD SERVICE I GOT ", food);
        let measureUnit: MeasureUnitsDto = await this.muService.getByName(food.measurementName);
        console.log("THE MEASURE UNIT IS ", measureUnit);
        if(measureUnit === undefined)
        {
            console.log("NO MATCH FOR UNIT! CREATING A NEW ONE");
            const newUnit : CreateMeasureUnitsDto = new CreateMeasureUnitsDto();
            newUnit.name = food.measurementName;

            measureUnit = await this.muService.createUnit(newUnit);
        }
        const newFood : CreateFoodDto = new CreateFoodDto();
        newFood.carbsPerUnit = food.carbsPerUnit;
        newFood.fatsPerUnit = food.fatsPerUnit;
        newFood.kcalPerUnit = food.kcalPerUnit;
        newFood.measureUnits = measureUnit;
        newFood.name = food.name;
        newFood.proteinsPerUnit = food.proteinsPerUnit;
        console.log("BEFORE SAVING FOOD IS ", newFood);
        return this.foodRepo.save(newFood);
    }

    findAll() : Promise<FoodDto[]>
    {
        return this.foodRepo.createQueryBuilder('f')
        .select('f.name', 'food_name').addSelect('f.kcalPerUnit','kcals').addSelect('f.fatsPerUnit','fats')
        .addSelect('f.carbsPerUnit','carbs').addSelect('f.proteinsPerUnit','proteins').
        leftJoin('f.measureUnits', 'mu').addSelect('mu.name','unitName').getRawMany();
    }

    findByName(name: string): Promise<FoodDto>
    {
        return this.foodRepo.createQueryBuilder('f')
        .select('f.name', 'food_name').addSelect('f.kcalPerUnit','kcals').addSelect('f.fatsPerUnit','fats')
        .addSelect('f.carbsPerUnit','carbs').addSelect('f.proteinsPerUnit','proteins')
        .leftJoin('f.measureUnits', 'mu').addSelect('mu.name','unitName')
        .where("f.name like '%' || :foodName || '%'", {foodName: name}).getRawOne();
    }    

    findEntityByName(name: string): Promise<CreateFoodDto>
    {
        return this.foodRepo.createQueryBuilder('f')
        .leftJoin('f.measureUnits', 'mu').
        where("f.name like '%' || :foodName || '%'", {foodName: name}).getOne();
    }
}
