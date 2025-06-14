"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ExerciseService = class ExerciseService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(exerciseDto) {
        const { contentId, type, description, template, data, blanks, answer, explanation, } = exerciseDto;
        const exercise = await this.prisma.exercise.create({
            data: {
                contentId,
                type,
                description,
                template,
                data: data ?? {},
                blanks: blanks ?? {},
                answer: answer ?? {},
                explanation,
            },
        });
        return exercise;
    }
    async delete(id) {
        const exercise = await this.prisma.exercise.findUnique({
            where: { id },
        });
        if (!exercise) {
            throw new Error('Exercicio não encontrado');
        }
        if (exercise.deletedAt) {
            throw new Error('Exercicio já excluído');
        }
        return this.prisma.exercise.update({
            where: { id },
            data: {
                deletedAt: new Date(),
            },
        });
    }
    async getExercise() {
        const exercises = await this.prisma.exercise.findMany({
            where: {
                deletedAt: null,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        if (!exercises) {
            throw new Error('Nenhum exercício encontrado');
        }
        return exercises;
    }
    async getExerciseById(id) {
        const exercise = await this.prisma.exercise.findUnique({
            where: { id },
        });
        if (!exercise) {
            throw new Error('Exercicio não encontrado');
        }
        if (exercise.deletedAt) {
            throw new Error('Exercicio excluído');
        }
        return exercise;
    }
    async getExerciseAnswers(id, userId) {
        const answer = await this.prisma.answer.findMany({
            where: { exerciseId: id, userId: userId },
            orderBy: { createdAt: 'desc' },
        });
        if (!answer || answer.length === 0) {
            throw new Error('Não existem respostas desse usuário para este exercício');
        }
        return answer;
    }
    async getLastExerciseAnswer(id, userId) {
        const answer = await this.prisma.answer.findFirst({
            where: { exerciseId: id, userId: userId },
            orderBy: { createdAt: 'desc' },
        });
        if (!answer) {
            throw new Error('Não existem respostas desse usuário para este exercício');
        }
        return answer;
    }
};
exports.ExerciseService = ExerciseService;
exports.ExerciseService = ExerciseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExerciseService);
//# sourceMappingURL=exercise.service.js.map