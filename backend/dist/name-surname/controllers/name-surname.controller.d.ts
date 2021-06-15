import { NameSurnameDto } from '../name-surname.dto';
import { NameSurnameService } from '../services/name-surname.service';
export declare class NameSurnameController {
    private namesurnameService;
    constructor(namesurnameService: NameSurnameService);
    findAll(): Promise<NameSurnameDto[]>;
    create(namesurname: NameSurnameDto): Promise<NameSurnameDto>;
}
