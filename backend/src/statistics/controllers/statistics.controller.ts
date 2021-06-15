/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { hasRoles } from 'src/auth/decorators/roles.decorator';
import { StatisticsService } from '../services/statistics.service';

@Controller('statistics')
export class StatisticsController {
    constructor(
        private statsService: StatisticsService
    )
    {}

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get()
    async getStats(@AuthUser() user, @Query() query, @Body() body, @Param() param): Promise<any>
    {
        return this.statsService.getStats(user.userId, query.type, query.days, query.date);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @hasRoles('user')
    @Get("all")
    async getAllStats(): Promise<any>
    {
        return this.statsService.getAllStatsFroTesting();
    }
}
