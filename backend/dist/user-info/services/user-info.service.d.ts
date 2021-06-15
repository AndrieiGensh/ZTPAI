import { Repository } from 'typeorm';
import { UserInfoEntity } from '../models/user-info.entity';
import { UserInfoDto } from '../user-info.dto';
export declare class UserInfoService {
    private userinfoRepo;
    constructor(userinfoRepo: Repository<UserInfoEntity>);
    create(userinfo: UserInfoDto): Promise<UserInfoDto>;
    findAll(): Promise<UserInfoEntity[]>;
    findEquivalent(lifestyle: string, sex: string, name: string, surname: string): Promise<UserInfoDto>;
}
