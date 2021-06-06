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
exports.FoodController = void 0;
const common_1 = require("@nestjs/common");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const food_dto_1 = require("../food.dto");
const food_service_1 = require("../services/food.service");
let FoodController = class FoodController {
    constructor(foodService) {
        this.foodService = foodService;
    }
    create(food) {
        console.log(food);
        return this.foodService.create(food);
    }
    async findAll() {
        return this.foodService.findAll();
    }
    findManyByName(query) {
        console.log(query.name);
        return this.foodService.findByName(query.name);
    }
};
__decorate([
    request_mapping_decorator_1.Post('new'),
    __param(0, route_params_decorator_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [food_dto_1.FoodDto]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "create", null);
__decorate([
    request_mapping_decorator_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "findAll", null);
__decorate([
    request_mapping_decorator_1.Get(),
    __param(0, route_params_decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "findManyByName", null);
FoodController = __decorate([
    common_1.Controller('food'),
    __metadata("design:paramtypes", [food_service_1.FoodService])
], FoodController);
exports.FoodController = FoodController;
//# sourceMappingURL=food.controller.js.map