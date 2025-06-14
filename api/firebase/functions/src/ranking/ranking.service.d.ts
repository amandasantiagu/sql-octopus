import { PrismaService } from 'prisma/prisma.service';
import { UserScore } from './dto/ranking-dto';
export declare class RankingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getRanking(): Promise<UserScore[]>;
}
