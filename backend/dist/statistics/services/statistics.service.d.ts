import { UsersService } from 'src/users/services/users.service';
import { Repository } from 'typeorm';
import { GetStatsDto } from '../get-stats.dto';
import { StatisticsEntity } from '../models/statistics.entity';
import { StatsDto } from '../stats.dto';
export declare class StatisticsService {
    private statsRepo;
    private userService;
    constructor(statsRepo: Repository<StatisticsEntity>, userService: UsersService);
    addOrUpdateStats(newStats: StatsDto, userId: number, date: string): Promise<GetStatsDto>;
    updateExistingStats(updates: StatsDto, recordToBeUpdated: GetStatsDto): Promise<GetStatsDto>;
    getStats(userId: number, type: string, days: number | null, date: string): Promise<any>;
    getAllStatsFroTesting(): Promise<StatsDto[]>;
}
