import { ContentService } from './content.service';
import type { CreateContentDto } from './dto/content-dto';
export declare class ContentController {
    private readonly contentService;
    constructor(contentService: ContentService);
    create(idModule: string, body: CreateContentDto): Promise<import("./dto/content-dto").ContentDto>;
    getContentByModule(idModule: string): Promise<import("./dto/content-dto").ContentDto[]>;
    getExercisesByContent(idContent: string): Promise<import("./dto/content-dto").ContentDto>;
    getContent(): Promise<import("./dto/content-dto").ContentDto[]>;
}
