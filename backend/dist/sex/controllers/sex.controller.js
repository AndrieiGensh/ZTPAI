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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SexController = void 0;
const common_1 = require("@nestjs/common");
const sex_service_1 = require("../services/sex.service");
const sex_dto_1 = require("../sex.dto");
let SexController = class SexController {
    constructor(sexService) {
        this.sexService = sexService;
    }
    async findAll() {
        return this.sexService.findAll();
    }
    create(sex) {
        return this.sexService.create(sex);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SexController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sex_dto_1.SexDto]),
    __metadata("design:returntype", Promise)
], SexController.prototype, "create", null);
SexController = __decorate([
    common_1.Controller('sex'),
    __metadata("design:paramtypes", [sex_service_1.SexService])
], SexController);
exports.SexController = SexController;
//# sourceMappingURL=sex.controller.js.map