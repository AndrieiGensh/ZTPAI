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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const settings_entity_1 = require("../../settings/models/settings.entity");
const diets_entity_1 = require("../../diets/models/diets.entity");
const post_entity_1 = require("../../post/models/post.entity");
const comment_entity_1 = require("../../comment/models/comment.entity");
const statistics_entity_1 = require("../../statistics/models/statistics.entity");
const user_info_entity_1 = require("../../user-info/models/user-info.entity");
const user_daily_meals_entity_1 = require("../../user-daily-meals/models/user-daily-meals.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_entity_1.CommentEntity, comments => comments.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(() => post_entity_1.PostEntity, posts => posts.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "posts", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_info_entity_1.UserInfoEntity, (userInfo) => userInfo.user),
    __metadata("design:type", user_info_entity_1.UserInfoEntity)
], UserEntity.prototype, "userInfo", void 0);
__decorate([
    typeorm_1.ManyToMany(() => settings_entity_1.SettingsEntity, (setting) => setting.users),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], UserEntity.prototype, "settings", void 0);
__decorate([
    typeorm_1.ManyToMany(() => diets_entity_1.DietsEntity, (diet) => diet.users),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], UserEntity.prototype, "diets", void 0);
__decorate([
    typeorm_1.OneToMany(() => statistics_entity_1.StatisticsEntity, (statistics) => statistics.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "stats", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_daily_meals_entity_1.UserDailyMealsEntity, (userDailyMeals) => userDailyMeals.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "userDailyMeals", void 0);
UserEntity = __decorate([
    typeorm_1.Entity()
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=users.entity.js.map