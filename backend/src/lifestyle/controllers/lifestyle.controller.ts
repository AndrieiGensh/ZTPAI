/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { LifestyleDto } from '../lifestyle.dto';
import { LifestyleService } from '../services/lifestyle.service';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { hasRoles } from 'src/auth/decorators/roles.decorator';

@Controller('lifestyle')
export class LifestyleController {
    constructor(private lifestyleService: LifestyleService)
    {}

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('admin')
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
