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
exports.FoodEntity = void 0;
const diet_products_entity_1 = require("../../diet-products/models/diet-products.entity");
const user_daily_meals_entity_1 = require("../../user-daily-meals/models/user-daily-meals.entity");
const typeorm_1 = require("typeorm");
const measure_units_entity_1 = require("../../measure-units/models/measure-units.entity");
const recipe_ingridients_entity_1 = require("../../recipe-ingridients/models/recipe-ingridients.entity");
let FoodEntity = class FoodEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FoodEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], FoodEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Object)
], FoodEntity.prototype, "kcalPerUnit", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Object)
], FoodEntity.prototype, "fatsPerUnit", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Object)
], FoodEntity.prototype, "carbsPerUnit", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Object)
], FoodEntity.prototype, "proteinsPerUnit", void 0);
__decorate([
    typeorm_1.ManyToOne(() => measure_units_entity_1.MeasureUnitsEntity, (measureUnit) => measureUnit.food, { onDelete: 'CASCADE' }),
    __metadata("design:type", measure_units_entity_1.MeasureUnitsEntity)
], FoodEntity.prototype, "measureUnits", void 0);
__decorate([
    typeorm_1.OneToMany(() => recipe_ingridients_entity_1.RecipeIngridientsEntity, recipe_ingridients => recipe_ingridients.ingridient),
    __metadata("design:type", Array)
], FoodEntity.prototype, "recipe_ingridients", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_daily_meals_entity_1.UserDailyMealsEntity, (userDailyMeals) => userDailyMeals.meal),
    __metadata("design:type", Array)
], FoodEntity.prototype, "userDailyMeals", void 0);
__decorate([
    typeorm_1.OneToMany(() => diet_products_entity_1.DietProductsEntity, (dietProducts) => dietProducts.diet),
    __metadata("design:type", Array)
], FoodEntity.prototype, "dietProducts", void 0);
FoodEntity = __decorate([
    typeorm_1.Entity()
], FoodEntity);
exports.FoodEntity = FoodEntity;
//# sourceMappingURL=food.entity.js.map