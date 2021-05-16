"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietsProductsModule = void 0;
const common_1 = require("@nestjs/common");
const diets_products_controller_1 = require("./controllers/diets-products.controller");
const diets_products_service_1 = require("./controllers/diets-products.service");
let DietsProductsModule = class DietsProductsModule {
};
DietsProductsModule = __decorate([
    common_1.Module({
        controllers: [diets_products_controller_1.DietsProductsController],
        providers: [diets_products_service_1.DietsProductsService],
    })
], DietsProductsModule);
exports.DietsProductsModule = DietsProductsModule;
//# sourceMappingURL=diets-products.module.js.map