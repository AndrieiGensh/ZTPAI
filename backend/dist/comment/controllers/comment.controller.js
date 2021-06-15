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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_guard_1 = require("../../auth/guards/jwt-guard.guard");
const authuser_decorator_1 = require("../../auth/decorators/authuser.decorator");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const comment_service_1 = require("../services/comment.service");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async addComment(user, body) {
        await this.commentService.addComment(user.userId, body.postId, body.content, body.date);
    }
    async findAll() {
        return this.commentService.findAll();
    }
    async getCommentsForPost(user, query) {
        return this.commentService.getCommentsForPost(query.postId);
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('user'),
    common_1.Post('/new-comment'),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "addComment", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('admin'),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('user'),
    common_1.Get('/post-comments'),
    __param(0, authuser_decorator_1.AuthUser()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentsForPost", null);
CommentController = __decorate([
    common_1.Controller('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map