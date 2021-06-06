/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateFoodDto } from '../create-food.dto';
import { FoodDto } from '../food.dto';
import { FoodService } from '../services/food.service';

@Controller('food')
export class FoodController {
    constructor(private foodService: FoodService)
    {}

    @Post('new')
    create(@Body() food: FoodDto) : Promise<CreateFoodDto>
    {
        console.log(food);
        return this.foodService.create(food);
    }

    @Get('all')
    async findAll() : Promise<FoodDto[]>
    {
        return this.foodService.findAll();
    }

    @Get()
    findManyByName(@Query() query): Promise<FoodDto[]>
    {
        console.log(query.name);
        return this.foodService.findByName(query.name);
    }
}
