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
exports.UserDailyMealsController = void 0;
const common_1 = require("@nestjs/common");
const authuser_decorator_1 = require("../../auth/decorators/authuser.decorator");
const jwt_guard_guard_1 = require("../../auth/guards/jwt-guard.guard");
const user_daily_meals_service_1 = require("../services/user-daily-meals.service");
let UserDailyMealsController = class UserDailyMealsController {
    constructor(userMealsService) {
        this.userMealsService = userMealsService;
    }
    async getDataForUser(user) {
        console.log(user);
        return this.userMealsService.getMealsForUser(user.userId);
    }
    async addNewMealForUser(user, body) {
        return this.userMealsService.addNewMeal(user.userId, body.foodName, body.type, body.amount, body.date);
    }
    async updateUserMealsRecords(user, body) {
        return this.userMealsService.updateUsersMealAndStats(user.userId, body.recordId, body.amount, body.date);
    }
    async deleteRecord(user, body) {
        return this.userMealsService.deleteUsersMeal(body.recordId, user.userId, body.date);
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Get(),
    __param(0, authuser_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserDailyMealsController.prototype, "getDataForUser", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Post(),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserDailyMealsController.prototype, "addNewMealForUser", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Put(),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserDailyMealsController.prototype, "updateUserMealsRecords", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Delete(),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserDailyMealsController.prototype, "deleteRecord", null);
UserDailyMealsController = __decorate([
    common_1.Controller('user-daily-meals'),
    __metadata("design:paramtypes", [user_daily_meals_service_1.UserDailyMealsService])
], UserDailyMealsController);
exports.UserDailyMealsController = UserDailyMealsController;
//# sourceMappingURL=user-daily-meals.controller.js.map