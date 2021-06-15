"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietsModule = void 0;
const common_1 = require("@nestjs/common");
const diets_controller_1 = require("./controllers/diets.controller");
const diets_service_1 = require("./services/diets.service");
let DietsModule = class DietsModule {
};
DietsModule = __decorate([
    common_1.Module({
        controllers: [diets_controller_1.DietsController],
        providers: [diets_service_1.DietsService],
    })
], DietsModule);
exports.DietsModule = DietsModule;
//# sourceMappingURL=diets.module.js.map