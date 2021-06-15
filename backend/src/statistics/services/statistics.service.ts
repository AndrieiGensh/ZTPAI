/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/services/users.service';
import { UserDto } from 'src/users/user.dto';
import { Repository } from 'typeorm';
import { CreateStatsDto } from '../create-stats.dto';
import { GetStatsDto } from '../get-stats.dto';
import { StatisticsEntity } from '../models/statistics.entity';
import { StatsDto } from '../stats.dto';

@Injectable()
export class StatisticsService {
    constructor(
        @InjectRepository(StatisticsEntity) 
        private statsRepo: Repository<StatisticsEntity>,
        private userService: UsersService
    )
    {}

    async addOrUpdateStats(newStats: StatsDto, userId: number, date: string): Promise<GetStatsDto>
    { 
        const searchStats: GetStatsDto = await this.statsRepo.createQueryBuilder('s')
        //.select('s.date').addSelect('kcal').addSelect('fats').addSelect('proteins')
        .leftJoinAndSelect('s.user', 'us').where('us.id = :usId', {usId: userId})
        .andWhere('s.date = :MyDate', {MyDate: date}).getOne();
        if(searchStats === undefined)
        {
            const stats = new CreateStatsDto();
            const user : UserDto = await this.userService.findById(userId);
            stats.carbs = newStats.carbs;
            stats.date = newStats.date;
            stats.fats = newStats.fats;
            stats.proteins = newStats.proteins;
            stats.kcal = newStats.kcal;
            stats.user = user;
            console.log("CREATING NEW STATS: ", stats);
            return this.statsRepo.save(stats);
        }
        return this.updateExistingStats(newStats,searchStats);
    }

    async updateExistingStats(updates: StatsDto, recordToBeUpdated: GetStatsDto): Promise<GetStatsDto>
    {
        recordToBeUpdated.carbs += updates.carbs;
        recordToBeUpdated.fats += updates.fats;
        recordToBeUpdated.kcal += updates.kcal;
        recordToBeUpdated.proteins += updates.proteins;
        return this.statsRepo.save(recordToBeUpdated);
    }

    async getStats(userId: number, type: string, days: number | null, date: string): Promise<any>
    {
        let result: GetStatsDto | GetStatsDto[];
        switch(type)
        {
            case 'daily':
            {
                result = await this.statsRepo.createQueryBuilder('s').leftJoin('s.user', 'uid')
                .where('s.date = :MyDate', {MyDate: date})
                .andWhere('uid.id = :UID', {UID: userId}).getOne();
            }
            break;
            case 'timeline':
            {
                if(days === null || days < 0 || days > 30)
                {
                    days = 30;
                }
                const testDate = new Date(date);
                testDate.setDate(testDate.getDate() - days);
                result = await this.statsRepo.createQueryBuilder('s').leftJoin('s.user', 'uid')
                .where('s.date >= :MyDate', {MyDate: testDate.toISOString()})
                .andWhere('uid.id = :UID', {UID: userId}).orderBy('s.date', 'ASC').getMany();
            } 
            break;
            default:
            {
                return null;
            }
        }
        if(result === undefined)
        {
            console.log("Ehhhhhhh, undefined?", result);
            //not really possible to hit this option
        }
        return result === undefined ? null : result;
    }

    async getAllStatsFroTesting(): Promise<StatsDto[]>
    {
        return this.statsRepo.find();
    }
}
