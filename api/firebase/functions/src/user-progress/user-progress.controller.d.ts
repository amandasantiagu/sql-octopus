import { UserProgressService } from './user-progress.service';
import type { CreateUserProgressDto, UpdateUserProgressDto } from './dto/user-progress-dto';
export declare class UserProgressController {
    private readonly userProgressService;
    constructor(userProgressService: UserProgressService);
    findAll(): Promise<import("./dto/user-progress-dto").UserProgressDto[]>;
    findOne(id: string): Promise<import("./dto/user-progress-dto").UserProgressDto | null>;
    findManyByUserId(id: string): Promise<import("./dto/user-progress-dto").UserProgressDto[]>;
    create(id: string, userProgress: CreateUserProgressDto): Promise<CreateUserProgressDto>;
    update(id: string, userProgress: UpdateUserProgressDto): Promise<UpdateUserProgressDto>;
    remove(userId: string): Promise<import("./dto/user-progress-dto").UserProgressDto>;
}
