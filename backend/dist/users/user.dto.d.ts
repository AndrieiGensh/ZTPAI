import { UserInfoDto } from 'src/user-info/user-info.dto';
export declare enum UserRoles {
    ADMIN = "admin",
    USER = "user",
    EDITOR = "editor"
}
export declare class UserDto {
    id: number;
    email: string;
    password: string;
    userInfo: UserInfoDto;
    roles: UserRoles;
}
