/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SexService } from '../services/sex.service';
import { SexDto } from '../sex.dto';

@Controller('sex')
export class SexController {
    constructor(private sexService : SexService)
    {}

    @Get()
    async findAll() : Promise<SexDto[]>
    {
        return this.sexService.findAll();
    }

    @Post()
    create(@Body() sex : SexDto) : Promise<SexDto>
    {
        return this.sexService.create(sex);
    }
}
