import { AuthService } from 'src/auth/services/auth.service';
import { NameSurnameService } from 'src/name-surname/services/name-surname.service';
import { UserInfoService } from 'src/user-info/services/user-info.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/users.entity';
import { UserDto } from '../user.dto';
export declare class UsersService {
    private userRepo;
    private authService;
    private namesurnameService;
    private userInfoService;
    constructor(userRepo: Repository<UserEntity>, authService: AuthService, namesurnameService: NameSurnameService, userInfoService: UserInfoService);
    create(user: UserDto): Promise<string>;
    findAll(): Promise<UserEntity[]>;
    login(user: UserDto): Promise<string>;
    validateUser(email: string, password: string): Promise<UserDto>;
    findByEmail(email: string): Promise<UserDto>;
    findById(id: number): Promise<UserDto>;
    getUserInfo(userId: number): Promise<Object>;
    changeUserInfo(userId: number, name: string, surname: string): Promise<boolean>;
    verifyPassword(userId: number, password: string): Promise<boolean>;
    changePassword(userId: number, password: string): Promise<boolean>;
    deleteUser(userId: number): Promise<boolean>;
}
