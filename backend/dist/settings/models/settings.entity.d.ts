import { UserEntity } from 'src/users/models/users.entity';
export declare class SettingsEntity {
    id: number;
    name: string;
    description: string;
    users: UserEntity[];
}
