"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../../users/services/users.service");
const user_dto_1 = require("../../users/user.dto");
const typeorm_2 = require("typeorm");
const create_stats_dto_1 = require("../create-stats.dto");
const statistics_entity_1 = require("../models/statistics.entity");
let StatisticsService = class StatisticsService {
    constructor(statsRepo, userService) {
        this.statsRepo = statsRepo;
        this.userService = userService;
    }
    async addOrUpdateStats(newStats, userId, date) {
        const searchStats = await this.statsRepo.createQueryBuilder('s')
            .leftJoinAndSelect('s.user', 'us').where('us.id = :usId', { usId: userId })
            .andWhere('s.date = :MyDate', { MyDate: date }).getOne();
        if (searchStats === undefined) {
            const stats = new create_stats_dto_1.CreateStatsDto();
            const user = await this.userService.findById(userId);
            stats.carbs = newStats.carbs;
            stats.date = newStats.date;
            stats.fats = newStats.fats;
            stats.proteins = newStats.proteins;
            stats.kcal = newStats.kcal;
            stats.user = user;
            console.log("CREATING NEW STATS: ", stats);
            return this.statsRepo.save(stats);
        }
        return this.updateExistingStats(newStats, searchStats);
    }
    async updateExistingStats(updates, recordToBeUpdated) {
        recordToBeUpdated.carbs += updates.carbs;
        recordToBeUpdated.fats += updates.fats;
        recordToBeUpdated.kcal += updates.kcal;
        recordToBeUpdated.proteins += updates.proteins;
        return this.statsRepo.save(recordToBeUpdated);
    }
    async getStats(userId, type, days, date) {
        let result;
        switch (type) {
            case 'daily':
                {
                    result = await this.statsRepo.createQueryBuilder('s').leftJoin('s.user', 'uid')
                        .where('s.date = :MyDate', { MyDate: date })
                        .andWhere('uid.id = :UID', { UID: userId }).getOne();
                }
                break;
            case 'timeline':
                {
                    if (days === null || days < 0 || days > 30) {
                        days = 30;
                    }
                    const testDate = new Date(date);
                    testDate.setDate(testDate.getDate() - days);
                    result = await this.statsRepo.createQueryBuilder('s').leftJoin('s.user', 'uid')
                        .where('s.date >= :MyDate', { MyDate: testDate.toISOString() })
                        .andWhere('uid.id = :UID', { UID: userId }).orderBy('s.date', 'ASC').getMany();
                }
                break;
            default:
                {
                    return null;
                }
        }
        if (result === undefined) {
            console.log("Ehhhhhhh, undefined?", result);
        }
        return result === undefined ? null : result;
    }
    async getAllStatsFroTesting() {
        return this.statsRepo.find();
    }
};
StatisticsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(statistics_entity_1.StatisticsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], StatisticsService);
exports.StatisticsService = StatisticsService;
//# sourceMappingURL=statistics.service.js.map