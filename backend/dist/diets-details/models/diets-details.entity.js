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
exports.DietsDetailsEntity = void 0;
const diets_entity_1 = require("../../diets/models/diets.entity");
const typeorm_1 = require("typeorm");
let DietsDetailsEntity = class DietsDetailsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DietsDetailsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DietsDetailsEntity.prototype, "Kcal_daily", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DietsDetailsEntity.prototype, "Proteins_daily", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DietsDetailsEntity.prototype, "Fats_daily", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], DietsDetailsEntity.prototype, "Carbs_daily", void 0);
__decorate([
    typeorm_1.OneToMany(() => diets_entity_1.DietsEntity, (diet) => diet.dietsDetails),
    __metadata("design:type", Array)
], DietsDetailsEntity.prototype, "diets", void 0);
DietsDetailsEntity = __decorate([
    typeorm_1.Entity()
], DietsDetailsEntity);
exports.DietsDetailsEntity = DietsDetailsEntity;
//# sourceMappingURL=diets-details.entity.js.map