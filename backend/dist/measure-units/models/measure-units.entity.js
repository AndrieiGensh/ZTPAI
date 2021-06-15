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
exports.MeasureUnitsEntity = void 0;
const food_entity_1 = require("../../food/models/food.entity");
const typeorm_1 = require("typeorm");
let MeasureUnitsEntity = class MeasureUnitsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MeasureUnitsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], MeasureUnitsEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => food_entity_1.FoodEntity, (food) => food.measureUnits),
    __metadata("design:type", Array)
], MeasureUnitsEntity.prototype, "food", void 0);
MeasureUnitsEntity = __decorate([
    typeorm_1.Entity()
], MeasureUnitsEntity);
exports.MeasureUnitsEntity = MeasureUnitsEntity;
//# sourceMappingURL=measure-units.entity.js.map