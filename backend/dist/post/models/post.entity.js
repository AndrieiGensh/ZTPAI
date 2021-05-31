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
exports.PostEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../../users/models/users.entity");
const comment_entity_1 = require("../../comment/models/comment.entity");
let PostEntity = class PostEntity {
    setDate() {
        this.date = new Date(Date.now().toLocaleString());
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PostEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ update: false }),
    __metadata("design:type", Date)
], PostEntity.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostEntity.prototype, "photoPath", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PostEntity.prototype, "likes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PostEntity.prototype, "dislikes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PostEntity.prototype, "hashtags", void 0);
__decorate([
    typeorm_1.ManyToOne(() => users_entity_1.UserEntity, user => user.posts),
    __metadata("design:type", users_entity_1.UserEntity)
], PostEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => comment_entity_1.CommentEntity, (comments) => comments.post),
    __metadata("design:type", Array)
], PostEntity.prototype, "comments", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostEntity.prototype, "setDate", null);
PostEntity = __decorate([
    typeorm_1.Entity()
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=post.entity.js.map