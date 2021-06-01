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
exports.StatisticsController = void 0;
const common_1 = require("@nestjs/common");
const authuser_decorator_1 = require("../../auth/decorators/authuser.decorator");
const jwt_guard_guard_1 = require("../../auth/guards/jwt-guard.guard");
const statistics_service_1 = require("../services/statistics.service");
let StatisticsController = class StatisticsController {
    constructor(statsService) {
        this.statsService = statsService;
    }
    async getStats(user, query, body, param) {
        console.log("REMASTERED getStats ROUTE WITH QUERY PARAMS: ", query, "/", body, "/", param);
        return this.statsService.getStats(user.userId, query.type, query.days, query.date);
    }
    async getAllStats() {
        return this.statsService.getAllStatsFroTesting();
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Get(),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_1.Query()), __param(2, common_1.Body()), __param(3, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "getStats", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Get("all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "getAllStats", null);
StatisticsController = __decorate([
    common_1.Controller('statistics'),
    __metadata("design:paramtypes", [statistics_service_1.StatisticsService])
], StatisticsController);
exports.StatisticsController = StatisticsController;
//# sourceMappingURL=statistics.controller.js.map