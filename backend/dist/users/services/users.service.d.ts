import { AuthService } from 'src/auth/services/auth.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/users.entity';
import { UserDto } from '../user.dto';
export declare class UsersService {
    private userRepo;
    private authService;
    constructor(userRepo: Repository<UserEntity>, authService: AuthService);
    create(user: UserDto): Promise<UserDto>;
    findAll(): Promise<UserEntity[]>;
    login(user: UserDto): Promise<string>;
    validateUser(email: string, password: string): Promise<UserDto>;
    findByEmail(email: string): Promise<UserDto>;
}
