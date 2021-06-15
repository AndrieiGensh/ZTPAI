import { UserEntity } from '../models/users.entity';
import { UsersService } from '../services/users.service';
import { UserDto } from '../user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): Promise<UserEntity[]>;
    register(user: UserDto): Promise<any>;
    login(user: UserDto): Promise<Object>;
    getUserInfo(user: any): Promise<Object>;
    changeUserInfo(user: any, body: any): Promise<boolean>;
    verifyPassword(user: any, query: any): Promise<boolean>;
    changePassword(user: any, body: any): Promise<boolean>;
    deleteAccount(user: any): Promise<boolean>;
}
