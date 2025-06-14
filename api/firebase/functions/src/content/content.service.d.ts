import { PrismaService } from 'prisma/prisma.service';
import { ContentDto, type CreateContentDto } from './dto/content-dto';
export declare class ContentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(idModule: string, contentData: CreateContentDto): Promise<ContentDto>;
    getContentByModule(idModule: string): Promise<ContentDto[]>;
    getExercisesByContent(idContent: string): Promise<ContentDto>;
    getContent(): Promise<ContentDto[]>;
}
