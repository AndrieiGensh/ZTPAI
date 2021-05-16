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
exports.MealTypesEntity = void 0;
const user_daily_meals_entity_1 = require("../../user-daily-meals/models/user-daily-meals.entity");
const typeorm_1 = require("typeorm");
let MealTypesEntity = class MealTypesEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MealTypesEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], MealTypesEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_daily_meals_entity_1.UserDailyMealsEntity, (userDailyMeals) => userDailyMeals.mealType),
    __metadata("design:type", Array)
], MealTypesEntity.prototype, "userDailyMeals", void 0);
MealTypesEntity = __decorate([
    typeorm_1.Entity()
], MealTypesEntity);
exports.MealTypesEntity = MealTypesEntity;
//# sourceMappingURL=meal-types.entity.js.map