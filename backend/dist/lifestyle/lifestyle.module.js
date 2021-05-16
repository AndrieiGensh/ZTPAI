"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifestyleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lifestyle_controller_1 = require("./controllers/lifestyle.controller");
const lifestyle_entity_1 = require("./models/lifestyle.entity");
const lifestyle_service_1 = require("./services/lifestyle.service");
let LifestyleModule = class LifestyleModule {
};
LifestyleModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([lifestyle_entity_1.LifestyleEntity])],
        controllers: [lifestyle_controller_1.LifestyleController],
        providers: [lifestyle_service_1.LifestyleService],
    })
], LifestyleModule);
exports.LifestyleModule = LifestyleModule;
//# sourceMappingURL=lifestyle.module.js.map