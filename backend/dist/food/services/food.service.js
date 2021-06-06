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
exports.FoodService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const create_measure_units_dto_1 = require("../../measure-units/create-measure-units.dto");
const measure_units_dto_1 = require("../../measure-units/measure-units.dto");
const measure_units_service_1 = require("../../measure-units/services/measure-units.service");
const typeorm_2 = require("typeorm");
const create_food_dto_1 = require("../create-food.dto");
const food_entity_1 = require("../models/food.entity");
let FoodService = class FoodService {
    constructor(foodRepo, muService) {
        this.foodRepo = foodRepo;
        this.muService = muService;
    }
    async create(food) {
        console.log("IN THE FOOD SERVICE I GOT ", food);
        let measureUnit = await this.muService.getByName(food.measurementName);
        console.log("THE MEASURE UNIT IS ", measureUnit);
        if (measureUnit === undefined) {
            console.log("NO MATCH FOR UNIT! CREATING A NEW ONE");
            const newUnit = new create_measure_units_dto_1.CreateMeasureUnitsDto();
            newUnit.name = food.measurementName;
            measureUnit = await this.muService.createUnit(newUnit);
        }
        const newFood = new create_food_dto_1.CreateFoodDto();
        newFood.carbsPerUnit = food.carbsPerUnit;
        newFood.fatsPerUnit = food.fatsPerUnit;
        newFood.kcalPerUnit = food.kcalPerUnit;
        newFood.measureUnits = measureUnit;
        newFood.name = food.name;
        newFood.proteinsPerUnit = food.proteinsPerUnit;
        console.log("BEFORE SAVING FOOD IS ", newFood);
        return this.foodRepo.save(newFood);
    }
    findAll() {
        return this.foodRepo.createQueryBuilder('f')
            .select('f.name', 'food_name').addSelect('f.kcalPerUnit', 'kcals').addSelect('f.fatsPerUnit', 'fats')
            .addSelect('f.carbsPerUnit', 'carbs').addSelect('f.proteinsPerUnit', 'proteins').
            leftJoin('f.measureUnits', 'mu').addSelect('mu.name', 'unitName').getRawMany();
    }
    findByName(name) {
        return this.foodRepo.createQueryBuilder('f')
            .select('f.name', 'food_name').addSelect('f.kcalPerUnit', 'kcals').addSelect('f.fatsPerUnit', 'fats')
            .addSelect('f.carbsPerUnit', 'carbs').addSelect('f.proteinsPerUnit', 'proteins')
            .leftJoin('f.measureUnits', 'mu').addSelect('mu.name', 'unitName')
            .where("f.name like '%' || :foodName || '%'", { foodName: name }).getRawMany();
    }
    findEntityByName(name) {
        return this.foodRepo.createQueryBuilder('f')
            .leftJoin('f.measureUnits', 'mu').
            where("f.name like '%' || :foodName || '%'", { foodName: name }).getOne();
    }
};
FoodService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(food_entity_1.FoodEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        measure_units_service_1.MeasureUnitsService])
], FoodService);
exports.FoodService = FoodService;
//# sourceMappingURL=food.service.js.map