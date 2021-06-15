import { UserInfoEntity } from '../models/user-info.entity';
import { UserInfoService } from '../services/user-info.service';
import { UserInfoDto } from '../user-info.dto';
export declare class UserInfoController {
    private userinfoService;
    constructor(userinfoService: UserInfoService);
    findAll(): Promise<UserInfoEntity[]>;
    create(userinfo: UserInfoDto): Promise<UserInfoDto>;
}
