import { SexService } from '../services/sex.service';
import { SexDto } from '../sex.dto';
export declare class SexController {
    private sexService;
    constructor(sexService: SexService);
    findAll(): Promise<SexDto[]>;
    create(sex: SexDto): Promise<SexDto>;
}
