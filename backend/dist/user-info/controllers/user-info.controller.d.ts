import { UserInfoService } from '../services/user-info.service';
import { UserInfoDto } from '../user-info.dto';
export declare class UserInfoController {
    private userinfoService;
    constructor(userinfoService: UserInfoService);
    findAll(): Promise<UserInfoDto[]>;
    create(userinfo: UserInfoDto): Promise<UserInfoDto>;
}
