/* eslint-disable prettier/prettier */
import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/decorators/authuser.decorator';
import { JwtGuard } from 'src/auth/guards/jwt-guard.guard';
import { StatisticsService } from '../services/statistics.service';

@Controller('statistics')
export class StatisticsController {
    constructor(
        private statsService: StatisticsService
    )
    {}

    @UseGuards(JwtGuard)
    @Get()
    async getStats(@AuthUser() user, @Body() body): Promise<any>
    {
        return this.statsService.getStats(user.userId, body.type, body.days, body.date);
    }

    @UseGuards(JwtGuard)
    @Get("all")
    async getAllStats(): Promise<any>
    {
        return this.statsService.getAllStatsFroTesting();
    }
}
