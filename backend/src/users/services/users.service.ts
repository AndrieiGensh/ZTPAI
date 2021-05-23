/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'node:assert';
import { AuthService } from 'src/auth/services/auth.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/users.entity';
import { UserDto } from '../user.dto';

@Injectable()
export class UsersService {
    constructor(
            @InjectRepository(UserEntity) private userRepo : Repository<UserEntity>,
            private authService: AuthService
        )
    {
    }

    async create(user : UserDto) : Promise<UserDto>
    {
        const hashedPass = await this.authService.hashPassword(user.password);
        const newUser = new UserDto;

        newUser.userInfo = user.userInfo;
        newUser.email = user.email;
        newUser.password = hashedPass;
        newUser.userInfo = user.userInfo;

        return this.userRepo.save(newUser);
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
        const result = await this.authService.comparePasswords(password, user.password);
        if(result === true)
        {
            return user;
        }
        else
        {
            throw Error;
        }
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

}
