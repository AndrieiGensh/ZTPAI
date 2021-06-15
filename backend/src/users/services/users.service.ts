/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'node:assert';
import { AuthService } from 'src/auth/services/auth.service';
import { NameSurnameService } from 'src/name-surname/services/name-surname.service';
import { UserInfoService } from 'src/user-info/services/user-info.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/users.entity';
import { UserDto } from '../user.dto';
import { NameSurnameDto } from 'src/name-surname/name-surname.dto';
import { UserInfoDto } from 'src/user-info/user-info.dto';
import { Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor(
            @InjectRepository(UserEntity) private userRepo : Repository<UserEntity>,
            private authService: AuthService,
            private namesurnameService: NameSurnameService,
            private userInfoService: UserInfoService
        )
    {
    }

    async create(user : UserDto) : Promise<string>
    {
        const hashedPass = await this.authService.hashPassword(user.password);
        const newUser = new UserDto;

        newUser.userInfo = user.userInfo;
        newUser.email = user.email;
        newUser.password = hashedPass;
        newUser.userInfo = user.userInfo;

        const registeredUser = await this.userRepo.save(newUser);

        return this.authService.generateJWT(registeredUser);
    }

    findAll() : Promise<UserEntity[]>
    {
        //return this.userRepo.find({ relations: ["userInfo", ""]});
        return this.userRepo.createQueryBuilder("u").
            leftJoinAndSelect("u.userInfo", "usIn").
            leftJoinAndSelect("usIn.sex", "usSex").
            leftJoinAndSelect("usIn.namesurname", "usNamesurname").
            leftJoinAndSelect("usIn.lifestyle", "usLifestyle").
            getMany();
    }

    async login(user: UserDto) : Promise<string>
    {
        const validationRes = await this.validateUser(user.email, user.password);
        return await this.authService.generateJWT(validationRes);
    }

    async validateUser(email: string, password: string) : Promise<UserDto>
    {
        const user = await this.findByEmail(email);
        if(user === undefined)
        {
            throw new Error("No user with such email");
        }
        const result = await this.authService.comparePasswords(password, user.password);
        if(result)
        {
            return user;
        }
            throw new Error("No match for user credentials");
    }

    async findByEmail(email: string) : Promise<UserDto>
    {
        email = email.toLowerCase();
        return await this.userRepo.createQueryBuilder('u').
        addSelect('u.password').
        addSelect('u.email').
        where('u.email = :m_email', {m_email: email}).
        getOne();
    }

    async findById(id: number): Promise<UserDto>
    {
        return this.userRepo.createQueryBuilder("u").
            leftJoinAndSelect("u.userInfo", "usIn").
            leftJoinAndSelect("usIn.sex", "usSex").
            leftJoinAndSelect("usIn.namesurname", "usNamesurname").
            leftJoinAndSelect("usIn.lifestyle", "usLifestyle").
            where('u.id = :UID', {UID: id}).
            getOne();
    }

    async getUserInfo(userId: number): Promise<Object>
    {
        return this.userRepo.createQueryBuilder('u')
        .leftJoin('u.userInfo', 'usIn').leftJoin('usIn.namesurname', 'NameSurname')
        .addSelect('NameSurname.name', 'name').addSelect('NameSurname.surname', 'surname')
        .where('u.id = :UserId', {UserId: userId})
        .getRawOne();
    }

    async changeUserInfo(userId: number, name: string, surname: string): Promise<boolean>
    {
        const user = await this.findById(userId);
        let userInfo;
        //let userInfo = await this.userInfoService.findEquivalent(user.userInfo.lifestyle.name,
            //user.userInfo.sex.name, user.userInfo.namesurname.name, user.userInfo.namesurname.surname);
        const newUserInfo = new UserInfoDto();
            //newUserInfo.lifestyle = user.userInfo.lifestyle;
            //newUserInfo.sex = user.userInfo.sex;
        let newNameSurname = new NameSurnameDto();
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

    async verifyPassword(userId: number, password: string): Promise<boolean>
    {
        const user : UserDto = await this.userRepo.createQueryBuilder('u')
        .addSelect('u.password').where('u.id = :UserId', {UserId: userId}).getOne();
        const result = await this.authService.comparePasswords(password, user.password);
        return result;
    }

    async changePassword(userId: number, password: string)
    {
        const user = await this.findById(userId);
        const newHashedPassword = await this.authService.hashPassword(password);
        user.password = newHashedPassword;
        const result = await this.userRepo.update({id: userId}, user);
        return result !== undefined;
    }

    async deleteUser(userId: number)
    {
       const result =  await this.userRepo.delete({id: userId});
       return result !== undefined;
    }

}
