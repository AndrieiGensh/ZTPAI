"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietsDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const diets_details_controller_1 = require("./controllers/diets-details.controller");
const diets_details_service_1 = require("./services/diets-details.service");
let DietsDetailsModule = class DietsDetailsModule {
};
DietsDetailsModule = __decorate([
    common_1.Module({
        controllers: [diets_details_controller_1.DietsDetailsController],
        providers: [diets_details_service_1.DietsDetailsService],
    })
], DietsDetailsModule);
exports.DietsDetailsModule = DietsDetailsModule;
//# sourceMappingURL=diets-details.module.js.map