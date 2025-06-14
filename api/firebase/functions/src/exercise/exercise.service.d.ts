import { PrismaService } from 'prisma/prisma.service';
import { ExerciseDto } from './dto/exercise-dto';
import type { AnswerDto } from 'src/answer/dto/answer-dto';
export declare class ExerciseService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(exerciseDto: ExerciseDto): Promise<ExerciseDto>;
    delete(id: string): Promise<ExerciseDto>;
    getExercise(): Promise<ExerciseDto[] | null>;
    getExerciseById(id: string): Promise<ExerciseDto | null>;
    getExerciseAnswers(id: string, userId: string): Promise<any[]>;
    getLastExerciseAnswer(id: string, userId: string): Promise<AnswerDto | null>;
}
