import { PrismaService } from 'prisma/prisma.service';
import type { CreateUserProgressDto, UpdateUserProgressDto, UserProgressDto } from './dto/user-progress-dto';
import { UsersService } from 'src/users/users.service';
export declare class UserProgressService {
    private readonly prisma;
    private readonly usersService;
    constructor(prisma: PrismaService, usersService: UsersService);
    findAll(): Promise<UserProgressDto[]>;
    findOne(id: string): Promise<UserProgressDto | null>;
    findManyByUserId(userId: string): Promise<UserProgressDto[]>;
    create(id: string, dto: CreateUserProgressDto): Promise<CreateUserProgressDto>;
    update(id: string, dto: UpdateUserProgressDto): Promise<UpdateUserProgressDto>;
    remove(userId: string): Promise<UserProgressDto>;
}
