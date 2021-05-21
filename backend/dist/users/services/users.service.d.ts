import { Repository } from 'typeorm';
import { UserEntity } from '../models/users.entity';
import { UserDto } from '../user.dto';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<UserEntity>);
    create(user: UserDto): Promise<UserDto>;
    findAll(): Promise<UserEntity[]>;
}
