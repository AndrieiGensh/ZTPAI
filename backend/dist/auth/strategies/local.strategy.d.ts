import { Strategy } from 'passport-local';
import { UsersService } from '../../users/services/users.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private userService;
    constructor(userService: UsersService);
    validate(email: string, password: string): Promise<any>;
}
export {};
