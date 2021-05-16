import { NameSurnameEntity } from '../../name-surname/models/name-surname.entity';
import { SexEntity } from '../../sex/models/sex.entity';
import { LifestyleEntity } from '../../lifestyle/models/lifestyle.entity';
import { UserEntity } from 'src/users/models/users.entity';
export declare class UserInfoEntity {
    id: number;
    age: number;
    user: UserEntity;
    namesurname: NameSurnameEntity;
    sex: SexEntity;
    lifestyle: LifestyleEntity;
}
