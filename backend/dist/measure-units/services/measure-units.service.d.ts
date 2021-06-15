import { Repository } from 'typeorm';
import { CreateMeasureUnitsDto } from '../create-measure-units.dto';
import { MeasureUnitsDto } from '../measure-units.dto';
import { MeasureUnitsEntity } from '../models/measure-units.entity';
export declare class MeasureUnitsService {
    private muRepo;
    constructor(muRepo: Repository<MeasureUnitsEntity>);
    createUnit(newUnit: CreateMeasureUnitsDto): Promise<MeasureUnitsDto>;
    getByName(name: string): Promise<MeasureUnitsDto | null>;
}
