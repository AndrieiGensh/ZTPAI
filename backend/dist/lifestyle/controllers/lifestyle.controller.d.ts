import { LifestyleDto } from '../lifestyle.dto';
import { LifestyleService } from '../services/lifestyle.service';
export declare class LifestyleController {
    private lifestyleService;
    constructor(lifestyleService: LifestyleService);
    create(lifestyle: LifestyleDto): Promise<LifestyleDto>;
    findAll(): Promise<LifestyleDto[]>;
}
