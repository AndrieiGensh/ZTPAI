import { Repository } from 'typeorm';
import { SexEntity } from '../models/sex.entity';
import { SexDto } from '../sex.dto';
export declare class SexService {
    private sexRepo;
    constructor(sexRepo: Repository<SexEntity>);
    create(sex: SexDto): Promise<SexDto>;
    findAll(): Promise<SexDto[]>;
}
