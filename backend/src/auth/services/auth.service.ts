/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
/*import * as bcrypt from 'bcrypt';*/
import { UserDto } from 'src/users/user.dto';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}

    async generateJWT(user: UserDto) : Promise<string>
    {
        const payload = {sub: user.id};
        return this.jwtService.signAsync(payload);
    }

    async hashPassword(password: string) : Promise<string>
    {
        return bcrypt.hash(password, 10);
    }

    async comparePasswords(newPass: string, hashedPass: string) : Promise<boolean>
    {
        return bcrypt.compare(newPass, hashedPass);
    }

    async decodeJWT(jwt: string): Promise<string | { [key: string]: any; }>
    {
        return this.jwtService.decode(jwt);
    }
}
