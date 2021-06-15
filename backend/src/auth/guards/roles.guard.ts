import { Injectable, CanActivate, ExecutionContext, Inject, forwardRef } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UsersService } from "src/users/services/users.service";
import { Observable } from "rxjs";
import { UserDto } from "../../users/user.dto";
import { map } from "rxjs/operators";
import { hasRoles } from "../decorators/roles.decorator";


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,

        //@Inject(forwardRef(() => UsersService))
        private userService: UsersService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user: any = request.user;

        const userData = await this.userService.findById(user.userId);
        const hasRole = () => roles.indexOf(user.roles) > -1;
        let hasPermission: boolean = false;

        if (hasRole()) 
        {
           hasPermission = true;
        };
        return user && hasPermission;
    }
}