/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';

import { MealTypesDto } from '../meal-types.dto';
import { MealTypesService } from '../services/meal-types.service';

@Controller('meal-types')
export class MealTypesController {
    constructor(
        private mealtypesService: MealTypesService
    ){}

    @Post()
    async addnewtype(@Body() type: MealTypesDto): Promise<MealTypesDto>
    {
        console.log(type);
        return this.mealtypesService.addNewType(type);
    }

    @Get()
    async getAll(): Promise<MealTypesDto[]>
    {
        return this.mealtypesService.getAll();
    }
}
