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
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let AnswerService = class AnswerService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.answer.findMany();
    }
    async findOne(id) {
        return this.prisma.answer.findUnique({ where: { id } });
    }
    async create(answerDto) {
        if (!answerDto)
            return null;
        const sanitizedAnswerDto = {
            ...answerDto,
            answer: answerDto.answer ?? client_1.Prisma.JsonNull,
        };
        return this.prisma.answer.create({
            data: sanitizedAnswerDto,
        });
    }
    async findOneByExerciseId(exerciseId) {
        return this.prisma.answer.findFirst({
            where: { exerciseId },
        });
    }
    async updateByExerciseId(exerciseId, answerDto) {
        if (!answerDto)
            return null;
        const sanitizedAnswerDto = {
            answer: answerDto.answer ?? client_1.Prisma.JsonNull,
            updatedAt: new Date(),
        };
        return this.prisma.answer.updateMany({
            where: { exerciseId },
            data: sanitizedAnswerDto,
        });
    }
    async update(id, answerDto) {
        if (!answerDto)
            return null;
        const sanitizedAnswerDto = {
            ...answerDto,
            answer: answerDto.answer ?? client_1.Prisma.JsonNull,
        };
        return this.prisma.answer.update({
            where: { id },
            data: sanitizedAnswerDto,
        });
    }
    async remove(id) {
        return this.prisma.answer.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
};
exports.AnswerService = AnswerService;
exports.AnswerService = AnswerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnswerService);
//# sourceMappingURL=answer.service.js.map