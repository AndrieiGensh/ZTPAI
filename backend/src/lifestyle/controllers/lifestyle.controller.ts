/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LifestyleDto } from '../lifestyle.dto';
import { LifestyleService } from '../services/lifestyle.service';

@Controller('lifestyle')
export class LifestyleController {
    constructor(private lifestyleService: LifestyleService)
    {}

    @Post()
    create(@Body() lifestyle : LifestyleDto) : Promise<LifestyleDto>
    {
        return this.lifestyleService.create(lifestyle);
    }

    @Get()
    async findAll() : Promise<LifestyleDto[]>
    {
        return this.lifestyleService.findAll();
    }
}
