/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { NameSurnameDto } from '../name-surname.dto';
import { NameSurnameService } from '../services/name-surname.service';

@Controller('name-surname')
export class NameSurnameController {
    constructor(private namesurnameService : NameSurnameService)
    {
        
    }

    @Get()
    async findAll() : Promise<NameSurnameDto[]>
    {
        return this.namesurnameService.findAll();
    }

    @Post()
    create(@Body() namesurname : NameSurnameDto) : Promise<NameSurnameDto>
    {
        return this.namesurnameService.create(namesurname);
    }
}
