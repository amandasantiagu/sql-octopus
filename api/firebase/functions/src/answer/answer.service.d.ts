import { PrismaService } from 'prisma/prisma.service';
import { AnswerDto } from './dto/answer-dto';
import { Prisma } from '@prisma/client';
export declare class AnswerService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        answer: Prisma.JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    }[]>;
    findOne(id: string): Promise<{
        answer: Prisma.JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    } | null>;
    create(answerDto: AnswerDto): Promise<{
        answer: Prisma.JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    } | null>;
    findOneByExerciseId(exerciseId: string): Promise<AnswerDto | null>;
    updateByExerciseId(exerciseId: string, answerDto: Partial<AnswerDto>): Promise<Prisma.BatchPayload | null>;
    update(id: string, answerDto: AnswerDto): Promise<{
        answer: Prisma.JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    } | null>;
    remove(id: string): Promise<{
        answer: Prisma.JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    }>;
}
