import { StatisticsService } from '../services/statistics.service';
export declare class StatisticsController {
    private statsService;
    constructor(statsService: StatisticsService);
    getStats(user: any, body: any): Promise<any>;
    getAllStats(): Promise<any>;
}
