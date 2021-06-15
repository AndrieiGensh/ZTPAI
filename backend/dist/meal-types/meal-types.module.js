"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealTypesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const meal_types_controller_1 = require("./controllers/meal-types.controller");
const meal_types_entity_1 = require("./models/meal-types.entity");
const meal_types_service_1 = require("./services/meal-types.service");
const users_module_1 = require("../users/users.module");
let MealTypesModule = class MealTypesModule {
};
MealTypesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([meal_types_entity_1.MealTypesEntity]),
            common_1.forwardRef(() => users_module_1.UsersModule),
        ],
        controllers: [meal_types_controller_1.MealTypesController],
        providers: [meal_types_service_1.MealTypesService],
        exports: [meal_types_service_1.MealTypesService]
    })
], MealTypesModule);
exports.MealTypesModule = MealTypesModule;
//# sourceMappingURL=meal-types.module.js.map