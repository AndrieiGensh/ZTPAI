import { Repository } from 'typeorm';
import { NameSurnameEntity } from '../models/name-surname.entity';
import { NameSurnameDto } from '../name-surname.dto';
export declare class NameSurnameService {
    private namesurnameRepo;
    constructor(namesurnameRepo: Repository<NameSurnameEntity>);
    create(namesurname: NameSurnameDto): Promise<NameSurnameDto>;
    findAll(): Promise<NameSurnameDto[]>;
    findByNameSurnameCombination(name: string, surname: string): Promise<NameSurnameDto>;
}
