import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from '../users/users.service';
export declare class ScheduleService {
    private readonly prisma;
    private readonly usersService;
    private readonly logger;
    constructor(prisma: PrismaService, usersService: UsersService);
    handleLifeRecovery(): Promise<void>;
    private shouldRecoverLife;
}
