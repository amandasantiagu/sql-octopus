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
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const content_dto_1 = require("./dto/content-dto");
let ContentService = class ContentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(idModule, contentData) {
        const module = await this.prisma.module.findUnique({
            where: { id: idModule },
            select: { id: true },
        });
        if (!module) {
            throw new Error('O módulo enviado não existe.');
        }
        const content = await this.prisma.content.create({
            data: {
                label: contentData.label,
                moduleId: idModule,
            },
        });
        if (!content) {
            throw new Error('Não foi possível criar o conteúdo.');
        }
        return new content_dto_1.ContentDto(content);
    }
    async getContentByModule(idModule) {
        const module = await this.prisma.module.findUnique({
            where: { id: idModule },
        });
        if (!module) {
            throw new Error('O módulo enviado não existe.');
        }
        const contents = await this.prisma.content.findMany({
            where: { moduleId: idModule },
            orderBy: {
                createdAt: 'asc',
            },
        });
        if (!contents) {
            throw new Error('Nenhum conteúdo encontrado para este módulo.');
        }
        return contents.map((content) => new content_dto_1.ContentDto(content));
    }
    async getExercisesByContent(idContent) {
        const content = await this.prisma.content.findUnique({
            where: { id: idContent },
            include: { exercises: true },
        });
        if (!content) {
            throw new Error('O conteúdo enviado não existe.');
        }
        if (content.exercises.length === 0) {
            throw new Error('Nenhum exercício encontrado para este conteúdo.');
        }
        return content;
    }
    async getContent() {
        const contents = await this.prisma.content.findMany({
            orderBy: {
                createdAt: 'asc',
            },
        });
        if (!contents) {
            throw new Error('No contents found');
        }
        return contents.map((content) => new content_dto_1.ContentDto(content));
    }
};
exports.ContentService = ContentService;
exports.ContentService = ContentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContentService);
//# sourceMappingURL=content.service.js.map