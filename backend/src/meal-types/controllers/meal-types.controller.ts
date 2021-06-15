/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { MealTypesDto } from '../meal-types.dto';
import { MealTypesService } from '../services/meal-types.service';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { hasRoles } from 'src/auth/decorators/roles.decorator';

@Controller('meal-types')
export class MealTypesController {
    constructor(
        private mealtypesService: MealTypesService
    ){}

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('admin')
    @Post()
    async addnewtype(@Body() type: MealTypesDto): Promise<MealTypesDto>
    {
        return this.mealtypesService.addNewType(type);
    }

    @Get()
    async getAll(): Promise<MealTypesDto[]>
    {
        return this.mealtypesService.getAll();
    }
}
