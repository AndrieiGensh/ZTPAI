"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModule = void 0;
const common_1 = require("@nestjs/common");
const food_service_1 = require("./services/food.service");
const food_controller_1 = require("./controllers/food.controller");
const typeorm_1 = require("@nestjs/typeorm");
const food_entity_1 = require("./models/food.entity");
const measure_units_service_1 = require("../measure-units/services/measure-units.service");
const measure_units_module_1 = require("../measure-units/measure-units.module");
const users_module_1 = require("../users/users.module");
let FoodModule = class FoodModule {
};
FoodModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([food_entity_1.FoodEntity]),
            measure_units_module_1.MeasureUnitsModule,
            users_module_1.UsersModule
        ],
        controllers: [food_controller_1.FoodController],
        providers: [food_service_1.FoodService],
        exports: [food_service_1.FoodService]
    })
], FoodModule);
exports.FoodModule = FoodModule;
//# sourceMappingURL=food.module.js.map