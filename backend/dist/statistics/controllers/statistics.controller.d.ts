import { StatisticsService } from '../services/statistics.service';
export declare class StatisticsController {
    private statsService;
    constructor(statsService: StatisticsService);
    getStats(user: any, query: any, body: any, param: any): Promise<any>;
    getAllStats(): Promise<any>;
}
