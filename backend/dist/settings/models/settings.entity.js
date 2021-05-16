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
exports.SettingsEntity = void 0;
const users_entity_1 = require("../../users/models/users.entity");
const typeorm_1 = require("typeorm");
let SettingsEntity = class SettingsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SettingsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SettingsEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToMany(() => users_entity_1.UserEntity, (user) => user.settings),
    __metadata("design:type", Array)
], SettingsEntity.prototype, "users", void 0);
SettingsEntity = __decorate([
    typeorm_1.Entity()
], SettingsEntity);
exports.SettingsEntity = SettingsEntity;
//# sourceMappingURL=settings.entity.js.map