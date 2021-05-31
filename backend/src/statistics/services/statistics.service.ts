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
        console.log("IN STATS ", newStats, date);
        const searchStats: GetStatsDto = await this.statsRepo.createQueryBuilder('s')
        //.select('s.date').addSelect('kcal').addSelect('fats').addSelect('proteins')
        .leftJoinAndSelect('s.user', 'us').where('us.id = :usId', {usId: userId})
        .andWhere('s.date = :MyDate', {MyDate: date}).getOne();
        console.log("I FOUND ", searchStats);
        if(searchStats === undefined)
        {
            console.log("NO STATS FOR THIS USER FOR TODAY");
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
        console.log("IN AUPDATE EXISTING STATS updates=", updates, " RECORD TO BE UPDATED ", recordToBeUpdated);
        recordToBeUpdated.carbs += updates.carbs;
        recordToBeUpdated.fats += updates.fats;
        recordToBeUpdated.kcal += updates.kcal;
        recordToBeUpdated.proteins += updates.proteins;
        console.log("BUT UPDATED RECORD = ", recordToBeUpdated)
        return this.statsRepo.save(recordToBeUpdated);
    }

    async getStats(userId: number, type: string, days: number | null, date: string): Promise<any>
    {
        console.log("IN STST GET ALL", userId, type, days, date, new Date(date));
        let result;
        switch(type)
        {
            case 'daily':
            {
                console.log("TYPE IS DAILY");
                result = await this.statsRepo.createQueryBuilder('s').leftJoin('s.user', 'uid')
                .select('s.date', 'date').addSelect('s.kcal', 'kcal').addSelect('s.carbs', 'carbs')
                .addSelect('s.proteins', 'proteins').andWhere('s.date >= :MyDate', {MyDate: date})
                .andWhere('uid.id = :UID', {UID: userId}).getRawOne();
                console.log("SREACH RES IS ", result);
                const testDate = new Date(date);
                testDate.setDate(testDate.getDate() + 20);
                console.log("I WONDER ... ", testDate.toISOString());
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
                console.log("START AT ", testDate);
                result = await this.statsRepo.createQueryBuilder('s').leftJoin('s.user', 'uid')
                .select('s.date', 'date').addSelect('s.kcal', 'kcal').addSelect('s.carbs', 'carbs')
                .addSelect('s.proteins', 'proteins').andWhere('s.date >= :MyDate', {MyDate: testDate})
                .andWhere('uid.id = :UID', {UID: userId}).getRawMany();
                console.log("SREACH RES IS ", result);
            } 
            break;
            default:
            {
                return null;
            }
        }
        return result === undefined ? null : result;
    }

    async getAllStatsFroTesting(): Promise<StatsDto[]>
    {
        return this.statsRepo.find();
    }
}
