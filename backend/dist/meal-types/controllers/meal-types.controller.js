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
exports.MealTypesController = void 0;
const common_1 = require("@nestjs/common");
const meal_types_dto_1 = require("../meal-types.dto");
const meal_types_service_1 = require("../services/meal-types.service");
const authuser_decorator_1 = require("../../auth/decorators/authuser.decorator");
const jwt_guard_guard_1 = require("../../auth/guards/jwt-guard.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
let MealTypesController = class MealTypesController {
    constructor(mealtypesService) {
        this.mealtypesService = mealtypesService;
    }
    async addnewtype(type) {
        return this.mealtypesService.addNewType(type);
    }
    async getAll() {
        return this.mealtypesService.getAll();
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('admin'),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meal_types_dto_1.MealTypesDto]),
    __metadata("design:returntype", Promise)
], MealTypesController.prototype, "addnewtype", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MealTypesController.prototype, "getAll", null);
MealTypesController = __decorate([
    common_1.Controller('meal-types'),
    __metadata("design:paramtypes", [meal_types_service_1.MealTypesService])
], MealTypesController);
exports.MealTypesController = MealTypesController;
//# sourceMappingURL=meal-types.controller.js.map