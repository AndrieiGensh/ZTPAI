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
exports.UserInfoEntity = void 0;
const typeorm_1 = require("typeorm");
const name_surname_entity_1 = require("../../name-surname/models/name-surname.entity");
const sex_entity_1 = require("../../sex/models/sex.entity");
const lifestyle_entity_1 = require("../../lifestyle/models/lifestyle.entity");
const users_entity_1 = require("../../users/models/users.entity");
let UserInfoEntity = class UserInfoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserInfoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], UserInfoEntity.prototype, "age", void 0);
__decorate([
    typeorm_1.OneToMany(() => users_entity_1.UserEntity, (user) => user.userInfo),
    __metadata("design:type", users_entity_1.UserEntity)
], UserInfoEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => name_surname_entity_1.NameSurnameEntity, (namesurname) => namesurname.userInfo),
    __metadata("design:type", name_surname_entity_1.NameSurnameEntity)
], UserInfoEntity.prototype, "namesurname", void 0);
__decorate([
    typeorm_1.ManyToOne(() => sex_entity_1.SexEntity, (sex) => sex.userInfo),
    __metadata("design:type", sex_entity_1.SexEntity)
], UserInfoEntity.prototype, "sex", void 0);
__decorate([
    typeorm_1.ManyToOne(() => lifestyle_entity_1.LifestyleEntity, (lifestyle) => lifestyle.userInfo),
    __metadata("design:type", lifestyle_entity_1.LifestyleEntity)
], UserInfoEntity.prototype, "lifestyle", void 0);
UserInfoEntity = __decorate([
    typeorm_1.Entity()
], UserInfoEntity);
exports.UserInfoEntity = UserInfoEntity;
//# sourceMappingURL=user-info.entity.js.map