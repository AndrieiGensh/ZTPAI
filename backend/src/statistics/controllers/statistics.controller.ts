/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
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
    async getStats(@AuthUser() user, @Query() query, @Body() body, @Param() param): Promise<any>
    {
        console.log("REMASTERED getStats ROUTE WITH QUERY PARAMS: ", query, "/", body, "/", param);
        return this.statsService.getStats(user.userId, query.type, query.days, query.date);
    }

    @UseGuards(JwtGuard)
    @Get("all")
    async getAllStats(): Promise<any>
    {
        return this.statsService.getAllStatsFroTesting();
    }
}
