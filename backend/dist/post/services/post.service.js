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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const create_post_dto_1 = require("../create-post.dto");
const post_entity_1 = require("../models/post.entity");
const users_entity_1 = require("../../users/models/users.entity");
const users_service_1 = require("../../users/services/users.service");
let PostService = class PostService {
    constructor(postRepo, userService) {
        this.postRepo = postRepo;
        this.userService = userService;
    }
    async getPostById(id) {
        return await this.postRepo.createQueryBuilder('p').
            addSelect('p.id').addSelect('p.date').addSelect('p.content').
            addSelect('p.photoPath').addSelect('p.likes').addSelect('p.dislikes').
            leftJoinAndSelect('p.user', 'user').leftJoinAndSelect('user.userInfo', 'usIn').
            leftJoinAndSelect('usIn.namesurname', 'namesurname').
            leftJoinAndSelect('p.comments', 'comments').
            where('p.id = :postid', { postid: id }).getOne();
    }
    async getNMostPopularPosts(n) {
        return await this.postRepo.createQueryBuilder('p').
            leftJoinAndSelect('p.user', 'user').
            leftJoinAndSelect('p.comments', 'comments').
            orderBy('p.date', 'DESC').addOrderBy('p.likes', 'DESC').
            take(n).getMany();
    }
    async getFilteredPosts(filters) {
    }
    async createPost(userId, title, content, photoPath, hashtags, date) {
        const user = await this.userService.findById(userId);
        console.log("The user is ", user);
        const post = new create_post_dto_1.CreatePostDto;
        post.title = title;
        post.content = content;
        post.photoPath = photoPath;
        post.likes = 0;
        post.dislikes = 0;
        post.hashtags = hashtags;
        post.user = user;
        post.date = new Date(date);
        console.log("We are about to save this post instance ", post);
        return this.postRepo.save(post);
    }
    async updateLikesDislikes(postId, likes, dislikes) {
        let post = await this.postRepo.createQueryBuilder('p')
            .where('p.id = :PostId', { PostId: postId }).getOne();
        post.likes += likes;
        post.dislikes += dislikes;
        return [post.likes, post.dislikes];
    }
};
PostService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_entity_1.PostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map