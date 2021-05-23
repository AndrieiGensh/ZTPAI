import { UserEntity } from '../models/users.entity';
import { UsersService } from '../services/users.service';
import { UserDto } from '../user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): Promise<UserEntity[]>;
    create(userinfo: UserDto): Promise<UserDto>;
    login(user: UserDto): Promise<Object>;
}
