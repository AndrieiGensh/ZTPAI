"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDailyMealsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_daily_meals_controller_1 = require("./controllers/user-daily-meals.controller");
const user_daily_meals_entity_1 = require("./models/user-daily-meals.entity");
const user_daily_meals_service_1 = require("./services/user-daily-meals.service");
let UserDailyMealsModule = class UserDailyMealsModule {
};
UserDailyMealsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_daily_meals_entity_1.UserDailyMealsEntity])],
        controllers: [user_daily_meals_controller_1.UserDailyMealsController],
        providers: [user_daily_meals_service_1.UserDailyMealsService],
    })
], UserDailyMealsModule);
exports.UserDailyMealsModule = UserDailyMealsModule;
//# sourceMappingURL=user-daily-meals.module.js.map