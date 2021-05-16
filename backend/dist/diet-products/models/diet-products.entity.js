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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietProductsEntity = void 0;
const diets_entity_1 = require("../../diets/models/diets.entity");
const food_entity_1 = require("../../food/models/food.entity");
const typeorm_1 = require("typeorm");
let DietProductsEntity = class DietProductsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DietProductsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", Boolean)
], DietProductsEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(() => food_entity_1.FoodEntity, (food) => food.dietProducts),
    __metadata("design:type", food_entity_1.FoodEntity)
], DietProductsEntity.prototype, "food", void 0);
__decorate([
    typeorm_1.ManyToOne(() => diets_entity_1.DietsEntity, (diet) => diet.dietProducts),
    __metadata("design:type", diets_entity_1.DietsEntity)
], DietProductsEntity.prototype, "diet", void 0);
DietProductsEntity = __decorate([
    typeorm_1.Entity()
], DietProductsEntity);
exports.DietProductsEntity = DietProductsEntity;
//# sourceMappingURL=diet-products.entity.js.map