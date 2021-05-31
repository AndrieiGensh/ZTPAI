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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../../auth/services/auth.service");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../models/users.entity");
const user_dto_1 = require("../user.dto");
let UsersService = class UsersService {
    constructor(userRepo, authService) {
        this.userRepo = userRepo;
        this.authService = authService;
    }
    async create(user) {
        const hashedPass = await this.authService.hashPassword(user.password);
        const newUser = new user_dto_1.UserDto;
        newUser.userInfo = user.userInfo;
        newUser.email = user.email;
        newUser.password = hashedPass;
        newUser.userInfo = user.userInfo;
        const registeredUser = await this.userRepo.save(newUser);
        return this.authService.generateJWT(registeredUser);
    }
    findAll() {
        return this.userRepo.createQueryBuilder("u").
            leftJoinAndSelect("u.userInfo", "usIn").
            leftJoinAndSelect("usIn.sex", "usSex").
            leftJoinAndSelect("usIn.namesurname", "usNamesurname").
            leftJoinAndSelect("usIn.lifestyle", "usLifestyle").
            getMany();
    }
    async login(user) {
        console.log("Inside login");
        const validationRes = await this.validateUser(user.email, user.password);
        console.log("AfterValidation");
        return await this.authService.generateJWT(validationRes);
    }
    async validateUser(email, password) {
        const user = await this.findByEmail(email);
        console.log(user.email);
        const result = await this.authService.comparePasswords(password, user.password);
        if (result) {
            console.log("match");
            return user;
        }
        console.log("No match");
        throw new Error("No match for user credentials");
    }
    async findByEmail(email) {
        email = email.toLowerCase();
        return await this.userRepo.createQueryBuilder('u').
            addSelect('u.password').
            addSelect('u.email').
            where('u.email = :m_email', { m_email: email }).
            getOne();
    }
    async findById(id) {
        return this.userRepo.createQueryBuilder("u").
            leftJoinAndSelect("u.userInfo", "usIn").
            leftJoinAndSelect("usIn.sex", "usSex").
            leftJoinAndSelect("usIn.namesurname", "usNamesurname").
            leftJoinAndSelect("usIn.lifestyle", "usLifestyle").
            where('u.id = :UID', { UID: id }).
            getOne();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map