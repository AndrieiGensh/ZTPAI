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
exports.DietsEntity = void 0;
const diet_products_entity_1 = require("../../diet-products/models/diet-products.entity");
const diets_details_entity_1 = require("../../diets-details/models/diets-details.entity");
const users_entity_1 = require("../../users/models/users.entity");
const typeorm_1 = require("typeorm");
let DietsEntity = class DietsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DietsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], DietsEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DietsEntity.prototype, "kcalPerDay", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DietsEntity.prototype, "fatsPerDay", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DietsEntity.prototype, "carbsPerDay", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DietsEntity.prototype, "proteinsPerDay", void 0);
__decorate([
    typeorm_1.OneToMany(() => diet_products_entity_1.DietProductsEntity, (dietProducts) => dietProducts.diet),
    __metadata("design:type", Array)
], DietsEntity.prototype, "dietProducts", void 0);
__decorate([
    typeorm_1.ManyToOne(() => diets_details_entity_1.DietsDetailsEntity, (dietsDetails) => dietsDetails.diets),
    __metadata("design:type", diets_details_entity_1.DietsDetailsEntity)
], DietsEntity.prototype, "dietsDetails", void 0);
__decorate([
    typeorm_1.ManyToMany(() => users_entity_1.UserEntity, (user) => user.diets),
    __metadata("design:type", Array)
], DietsEntity.prototype, "users", void 0);
DietsEntity = __decorate([
    typeorm_1.Entity()
], DietsEntity);
exports.DietsEntity = DietsEntity;
//# sourceMappingURL=diets.entity.js.map