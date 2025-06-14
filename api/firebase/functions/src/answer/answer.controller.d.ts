import { AnswerService } from './answer.service';
import { AnswerDto } from './dto/answer-dto';
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    findAll(): Promise<{
        answer: import("@prisma/client/runtime/library").JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    }[]>;
    findOne(id: string): Promise<{
        answer: import("@prisma/client/runtime/library").JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    } | null>;
    findOneByExerciseId(exerciseId: string): Promise<AnswerDto | null>;
    create(answerDto: AnswerDto): Promise<{
        answer: import("@prisma/client/runtime/library").JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    } | null>;
    update(id: string, answerDto: AnswerDto): Promise<{
        answer: import("@prisma/client/runtime/library").JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    } | null>;
    updateByExerciseId(exerciseId: string, answerDto: AnswerDto): Promise<import(".prisma/client").Prisma.BatchPayload | null>;
    remove(id: string): Promise<{
        answer: import("@prisma/client/runtime/library").JsonValue;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        exerciseId: string;
    }>;
}
