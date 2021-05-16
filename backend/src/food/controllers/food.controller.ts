/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { FoodDto } from '../food.dto';
import { FoodService } from '../services/food.service';

@Controller('food')
export class FoodController {
    constructor(private foodService: FoodService)
    {}

    @Post()
    create(@Body() food: FoodDto) : Promise<FoodDto>
    {
        return this.foodService.create(food);
    }

    @Get()
    async findAll() : Promise<FoodDto[]>
    {
        return this.foodService.findAll();
    }
}
