import { LifestyleDto } from 'src/lifestyle/lifestyle.dto';
import { NameSurnameDto } from 'src/name-surname/name-surname.dto';
import { SexDto } from 'src/sex/sex.dto';
export declare class UserInfoDto {
    id: number;
    age: number;
    sex: SexDto;
    namesurname: NameSurnameDto;
    lifestyle: LifestyleDto;
}
