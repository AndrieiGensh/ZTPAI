import { Repository } from 'typeorm';
import { LifestyleDto } from '../lifestyle.dto';
import { LifestyleEntity } from '../models/lifestyle.entity';
export declare class LifestyleService {
    private lifestyleRepo;
    constructor(lifestyleRepo: Repository<LifestyleEntity>);
    create(lifestyle: LifestyleDto): Promise<LifestyleDto>;
    findAll(): Promise<LifestyleDto[]>;
}
