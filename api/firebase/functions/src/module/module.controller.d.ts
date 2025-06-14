import { ModuleService } from './module.service';
import type { CreateModuleDto } from './dto/module-dto';
export declare class ModuleController {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    create(body: CreateModuleDto): Promise<import("./dto/module-dto").ModuleDto>;
    updateModule(idModule: string, body: CreateModuleDto): Promise<import("./dto/module-dto").ModuleDto>;
    deleteModule(idModule: string): Promise<import("./dto/module-dto").ModuleDto>;
    getModule(): Promise<import("./dto/module-dto").ModuleDto[]>;
    getContentModule(idModule: string): Promise<import("./dto/module-dto").ModuleDto>;
    getExercisesByContent(moduleId: string, contentId: string): Promise<import("./dto/module-dto").ModuleDto>;
}
