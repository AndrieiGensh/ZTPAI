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
const name_surname_service_1 = require("../../name-surname/services/name-surname.service");
const user_info_service_1 = require("../../user-info/services/user-info.service");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../models/users.entity");
const user_dto_1 = require("../user.dto");
const name_surname_dto_1 = require("../../name-surname/name-surname.dto");
const user_info_dto_1 = require("../../user-info/user-info.dto");
let UsersService = class UsersService {
    constructor(userRepo, authService, namesurnameService, userInfoService) {
        this.userRepo = userRepo;
        this.authService = authService;
        this.namesurnameService = namesurnameService;
        this.userInfoService = userInfoService;
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
        const validationRes = await this.validateUser(user.email, user.password);
        return await this.authService.generateJWT(validationRes);
    }
    async validateUser(email, password) {
        const user = await this.findByEmail(email);
        if (user === undefined) {
            throw new Error("No user with such email");
        }
        const result = await this.authService.comparePasswords(password, user.password);
        if (result) {
            return user;
        }
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
    async getUserInfo(userId) {
        return this.userRepo.createQueryBuilder('u')
            .leftJoin('u.userInfo', 'usIn').leftJoin('usIn.namesurname', 'NameSurname')
            .addSelect('NameSurname.name', 'name').addSelect('NameSurname.surname', 'surname')
            .where('u.id = :UserId', { UserId: userId })
            .getRawOne();
    }
    async changeUserInfo(userId, name, surname) {
        const user = await this.findById(userId);
        let userInfo;
        const newUserInfo = new user_info_dto_1.UserInfoDto();
        let newNameSurname = new name_surname_dto_1.NameSurnameDto();
        newNameSurname.name = name;
        newNameSurname.surname = surname;
        newNameSurname = await this.namesurnameService.create(newNameSurname);
        newUserInfo.namesurname = newNameSurname;
        newUserInfo.age = 50;
        userInfo = await this.userInfoService.create(newUserInfo);
        user.userInfo = userInfo;
        const result = await this.userRepo.save(user);
        return result !== undefined;
    }
    async verifyPassword(userId, password) {
        const user = await this.userRepo.createQueryBuilder('u')
            .addSelect('u.password').where('u.id = :UserId', { UserId: userId }).getOne();
        const result = await this.authService.comparePasswords(password, user.password);
        return result;
    }
    async changePassword(userId, password) {
        const user = await this.findById(userId);
        const newHashedPassword = await this.authService.hashPassword(password);
        user.password = newHashedPassword;
        const result = await this.userRepo.update({ id: userId }, user);
        return result !== undefined;
    }
    async deleteUser(userId) {
        const result = await this.userRepo.delete({ id: userId });
        return result !== undefined;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService,
        name_surname_service_1.NameSurnameService,
        user_info_service_1.UserInfoService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map