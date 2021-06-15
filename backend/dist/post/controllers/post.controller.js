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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const post_service_1 = require("../services/post.service");
const path = require("path");
const path_1 = require("path");
const uuid_1 = require("uuid");
const authuser_decorator_1 = require("../../auth/decorators/authuser.decorator");
const jwt_guard_guard_1 = require("../../auth/guards/jwt-guard.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async create(image, user, body) {
        return this.postService.createPost(user.userId, body.title, body.content, image.filename, body.hashtags, body.date);
    }
    async getNMostRatedPosts(query) {
        return this.postService.getNMostPopularPosts(query.n);
    }
    async getPostById(id) {
        return this.postService.getPostById(id);
    }
    async getPostImage(query, res) {
        const post = await this.postService.getPostById(query.postId.toString());
        if (post === undefined) {
            return Error("No such post for a given Id");
        }
        const imagePath = post.photoPath;
        return res.sendFile(path_1.join(process.cwd(), 'src/uploads/' + imagePath));
    }
    async updateLikesDislikes(body) {
        return this.postService.updateLikesDislikes(body.postId, body.likes, body.dislikes);
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('user'),
    common_1.Post('/create-post'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_1.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'src/uploads');
            },
            filename: (req, file, cb) => {
                const filename = path.parse(file.originalname).name.replace(/\s/g, '') + uuid_1.v4();
                const extension = path.parse(file.originalname).ext;
                cb(null, filename + '-' + extension);
            }
        }),
    })),
    __param(0, common_1.UploadedFile()), __param(1, authuser_decorator_1.AuthUser()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('user'),
    common_1.Get('/rated'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getNMostRatedPosts", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('user'),
    common_1.Get('/get-post-by-id/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostById", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('user'),
    common_1.Get('/post'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostImage", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    roles_decorator_1.hasRoles('user'),
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updateLikesDislikes", null);
PostController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map