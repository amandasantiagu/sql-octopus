import { PrismaService } from 'prisma/prisma.service';
import { ModuleDto, type CreateModuleDto } from './dto/module-dto';
export declare class ModuleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(moduleData: CreateModuleDto): Promise<ModuleDto>;
    updateModule(idModule: string, moduleData: CreateModuleDto): Promise<ModuleDto>;
    deleteModule(idModule: string): Promise<ModuleDto>;
    getContentModule(idModule: string): Promise<ModuleDto>;
    getModule(): Promise<ModuleDto[]>;
    getExercisesByContent(moduleId: string, contentId: string): Promise<ModuleDto>;
}
