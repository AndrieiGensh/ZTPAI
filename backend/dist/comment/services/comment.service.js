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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_dto_1 = require("../comment.dto");
const comment_entity_1 = require("../models/comment.entity");
const get_post_dto_1 = require("../../post/get-post.dto");
const post_service_1 = require("../../post/services/post.service");
const users_service_1 = require("../../users/services/users.service");
const user_dto_1 = require("../../users/user.dto");
let CommentService = class CommentService {
    constructor(commentRepo, postService, userService) {
        this.commentRepo = commentRepo;
        this.postService = postService;
        this.userService = userService;
    }
    async addComment(userId, postId, commentContent, date) {
        const commentAuthor = await this.userService.findById(userId);
        const postInstance = await this.postService.getPostById(postId.toString());
        const comment = new comment_dto_1.CommentDto();
        comment.user = commentAuthor;
        comment.post = postInstance;
        comment.content = commentContent;
        comment.likes = 0;
        comment.dislikes = 0;
        comment.date = new Date(date);
        return this.commentRepo.save(comment);
    }
    findAll() {
        return this.commentRepo.find();
    }
    async getCommentsForPost(postId) {
        return this.commentRepo.createQueryBuilder('c')
            .leftJoin('c.post', 'commentPost').leftJoin('c.user', 'author')
            .leftJoin('author.userInfo', 'usIn').leftJoin('usIn.namesurname', 'NameSurname')
            .addSelect('c.content', 'content').addSelect('c.date', 'creationDate')
            .addSelect('NameSurname.name', 'authorName')
            .where('commentPost.id = :PostId', { PostId: postId })
            .getRawMany();
    }
};
CommentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comment_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        post_service_1.PostService, users_service_1.UsersService])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map