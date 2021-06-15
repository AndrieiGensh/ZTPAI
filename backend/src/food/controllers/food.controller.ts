/* eslint-disable prettier/prettier */
import { Controller, UseGuards} from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateFoodDto } from '../create-food.dto';
import { FoodDto } from '../food.dto';
import { FoodService } from '../services/food.service';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { hasRoles } from 'src/auth/decorators/roles.decorator';

@Controller('food')
export class FoodController {
    constructor(private foodService: FoodService)
    {}

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('admin')
    @Post('new')
    create(@Body() food: FoodDto) : Promise<CreateFoodDto>
    {
        return this.foodService.create(food);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get('all')
    async findAll() : Promise<FoodDto[]>
    {
        return this.foodService.findAll();
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get()
    findManyByName(@Query() query): Promise<FoodDto[]>
    {
        return this.foodService.findByName(query.name);
    }
}
