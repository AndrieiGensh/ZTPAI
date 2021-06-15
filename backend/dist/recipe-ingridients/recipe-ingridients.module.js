"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeIngridientsModule = void 0;
const common_1 = require("@nestjs/common");
const recipe_ingridients_controller_1 = require("./controllers/recipe-ingridients.controller");
const recipe_ingridients_service_1 = require("./services/recipe-ingridients.service");
let RecipeIngridientsModule = class RecipeIngridientsModule {
};
RecipeIngridientsModule = __decorate([
    common_1.Module({
        controllers: [recipe_ingridients_controller_1.RecipeIngridientsController],
        providers: [recipe_ingridients_service_1.RecipeIngridientsService],
    })
], RecipeIngridientsModule);
exports.RecipeIngridientsModule = RecipeIngridientsModule;
//# sourceMappingURL=recipe-ingridients.module.js.map