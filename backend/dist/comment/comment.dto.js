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
exports.CommentDto = void 0;
const class_validator_1 = require("class-validator");
const get_post_dto_1 = require("../post/get-post.dto");
const user_dto_1 = require("../users/user.dto");
class CommentDto {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CommentDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], CommentDto.prototype, "date", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CommentDto.prototype, "content", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CommentDto.prototype, "likes", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CommentDto.prototype, "dislikes", void 0);
exports.CommentDto = CommentDto;
//# sourceMappingURL=comment.dto.js.map