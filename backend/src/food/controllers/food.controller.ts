/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
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

    @Get('one-like/:name')
    findOneByName(@Param('name') name: string): Promise<FoodDto>
    {
        console.log(name);
        return this.foodService.findByName(name);
    }
}
