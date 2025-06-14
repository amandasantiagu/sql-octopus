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
exports.ModuleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ModuleService = class ModuleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(moduleData) {
        const module = await this.prisma.module.create({
            data: moduleData,
        });
        return module;
    }
    async updateModule(idModule, moduleData) {
        const module = await this.prisma.module.findUnique({
            where: { id: idModule },
        });
        if (!module) {
            throw new Error('O módulo enviado não existe.');
        }
        const updatedModule = await this.prisma.module.update({
            where: { id: idModule },
            data: moduleData,
        });
        return updatedModule;
    }
    async deleteModule(idModule) {
        const module = await this.prisma.module.findUnique({
            where: { id: idModule },
        });
        if (!module) {
            throw new Error('O módulo enviado não existe.');
        }
        return this.prisma.module.update({
            where: { id: idModule },
            data: {
                deletedAt: new Date(),
            },
        });
    }
    async getContentModule(idModule) {
        const module = await this.prisma.module.findUnique({
            where: { id: idModule },
            include: {
                contents: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
            },
        });
        if (!module) {
            throw new Error('O módulo enviado não existe.');
        }
        return module;
    }
    async getModule() {
        const modules = await this.prisma.module.findMany({
            orderBy: {
                createdAt: 'asc',
            },
        });
        if (!modules) {
            throw new Error('No modules found');
        }
        return modules;
    }
    async getExercisesByContent(moduleId, contentId) {
        const module = await this.prisma.module.findUnique({
            where: { id: moduleId },
            include: {
                contents: {
                    where: { id: contentId },
                    include: {
                        exercises: true,
                    },
                },
            },
        });
        if (!module) {
            throw new Error('O módulo enviado não existe.');
        }
        return module;
    }
};
exports.ModuleService = ModuleService;
exports.ModuleService = ModuleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ModuleService);
//# sourceMappingURL=module.service.js.map