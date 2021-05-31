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
const jwt_guard_guard_1 = require("../../auth/guards/jwt-guard.guard");
const create_post_dto_1 = require("../create-post.dto");
const post_service_1 = require("../services/post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async create(image, body) {
        const newPost = new create_post_dto_1.CreatePostDto();
        newPost.content = body.content;
        newPost.dislikes = body.dislikes;
        newPost.likes = body.likes;
        newPost.hashtags = body.hashtags;
        newPost.title = body.title;
        newPost.user = body.user;
        newPost.photoPath = image.filename;
        return this.postService.createPost(newPost);
    }
    async getNMostRatedPosts(N) {
        return this.postService.getNMostPopularPosts(N);
    }
    async getPostById(id) {
        return this.postService.getPostById(id);
    }
};
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Post('new-post'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_1.diskStorage({
            destination: '../../uploads'
        }),
    })),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Get('rated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getNMostRatedPosts", null);
__decorate([
    common_1.UseGuards(jwt_guard_guard_1.JwtGuard),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostById", null);
PostController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map