import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/user.dto';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateJWT(user: UserDto): Promise<string>;
    hashPassword(password: string): Promise<string>;
    comparePasswords(newPass: string, hashedPass: string): Promise<boolean>;
}
