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
const post_entity_1 = require("../models/post.entity");
let PostService = class PostService {
    constructor(postRepo) {
        this.postRepo = postRepo;
    }
    async getPostById(id) {
        return await this.postRepo.createQueryBuilder('p').
            addSelect('p.id').addSelect('p.date').addSelect('p.content').
            addSelect('p.photoPath').addSelect('p.likes').addSelect('p.dislikes').
            leftJoinAndSelect('p.user', 'user').leftJoinAndSelect('user.userInfo', 'usIn').
            leftJoinAndSelect('usIn.namesurname', 'namesurname').
            leftJoinAndSelect('p.comments', 'comments').
            where('p.id = :posid', { postid: id }).getOne();
    }
    async getNMostPopularPosts(n) {
        return await this.postRepo.createQueryBuilder('p').
            leftJoinAndSelect('p.user', 'user').
            leftJoinAndSelect('p.comments', 'comments').
            leftJoinAndSelect('user.namesurname', 'namesurname').
            orderBy('p.date', 'DESC').addOrderBy('p.likes', 'DESC').
            take(n).getMany();
    }
    async getFilteredPosts(filters) {
    }
    async createPost(newPost) {
        return await this.postRepo.save(newPost);
    }
};
PostService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_entity_1.PostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map