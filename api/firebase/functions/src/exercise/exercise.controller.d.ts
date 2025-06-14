import { ExerciseService } from './exercise.service';
import type { ExerciseDto } from './dto/exercise-dto';
export declare class ExerciseController {
    private readonly exerciseService;
    constructor(exerciseService: ExerciseService);
    create(body: ExerciseDto): Promise<ExerciseDto>;
    delete(id: string): Promise<ExerciseDto>;
    getExercise(): Promise<ExerciseDto[] | null>;
    getExerciseById(id: string): Promise<ExerciseDto | null>;
    getExerciseAnswers(id: string, userId: string): Promise<any[]>;
    getLastExerciseAnswer(id: string, userId: string): Promise<import("../answer/dto/answer-dto").AnswerDto | null>;
}
