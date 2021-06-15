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
exports.UserDailyMealsEntity = void 0;
const food_entity_1 = require("../../food/models/food.entity");
const meal_types_entity_1 = require("../../meal-types/models/meal-types.entity");
const users_entity_1 = require("../../users/models/users.entity");
const typeorm_1 = require("typeorm");
let UserDailyMealsEntity = class UserDailyMealsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserDailyMealsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => users_entity_1.UserEntity, (user) => user.userDailyMeals, { onDelete: 'CASCADE' }),
    __metadata("design:type", users_entity_1.UserEntity)
], UserDailyMealsEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => food_entity_1.FoodEntity, (meal) => meal.userDailyMeals, { onDelete: 'CASCADE' }),
    __metadata("design:type", food_entity_1.FoodEntity)
], UserDailyMealsEntity.prototype, "meal", void 0);
__decorate([
    typeorm_1.ManyToOne(() => meal_types_entity_1.MealTypesEntity, (mealType) => mealType.userDailyMeals, { onDelete: 'CASCADE' }),
    __metadata("design:type", meal_types_entity_1.MealTypesEntity)
], UserDailyMealsEntity.prototype, "mealType", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], UserDailyMealsEntity.prototype, "amount_of_units", void 0);
UserDailyMealsEntity = __decorate([
    typeorm_1.Entity()
], UserDailyMealsEntity);
exports.UserDailyMealsEntity = UserDailyMealsEntity;
//# sourceMappingURL=user-daily-meals.entity.js.map