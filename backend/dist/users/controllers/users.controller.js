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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const jwt_guard_guard_1 = require("../../auth/guards/jwt-guard.guard");
const authuser_decorator_1 = require("../../auth/decorators/authuser.decorator");
const local_auth_guard_1 = require("../../auth/guards/local-auth.guard");
const post_filters_1 = require("../../post/models/post-filters");
const users_service_1 = require("../services/users.service");
const user_dto_1 = require("../user.dto");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAll() {
        return this.userService.findAll();
    }
    async register(user) {
        const token = await this.userService.create(user);
        return { access_token: token, expiresIn: '100' };
    }
    async login(user) {
        const jwt = await this.userService.login(user);
        return { access_token: jwt, expiresIn: '100' };
    }
    async getUserInfo(user) {
        return this.userService.getUserInfo(user.userId);
    }
    async changeUserInfo(user, body) {
        return this.userService.changeUserInfo(user.userId, body.name, body.surname);
    }
    async verifyPassword(user, query) {
        return this.userService.verifyPassword(user.userId, query.password);
    }
    async changePassword(user, body) {
        return this.userService.changePassword(user.userId, body.password);
    }
    async deleteAccount(user) {
        return this.userService.deleteUser(user.userId);
    }
};
__decorate([
    common_4.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_2.Post('register'),
    __param(0, common_3.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    common_4.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_2.Post('login'),
    __param(0, common_3.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    common_4.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Get('userInfo'),
    __param(0, authuser_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserInfo", null);
__decorate([
    common_4.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_2.Put('userInfo'),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_3.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeUserInfo", null);
__decorate([
    common_4.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Get('password-verification'),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_3.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyPassword", null);
__decorate([
    common_4.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_2.Put('password-change'),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_3.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
__decorate([
    common_4.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_2.Delete('delete'),
    __param(0, authuser_decorator_1.AuthUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteAccount", null);
UsersController = __decorate([
    common_5.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map