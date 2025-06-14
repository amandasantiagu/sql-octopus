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
exports.UserProgressService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const users_service_1 = require("../users/users.service");
let UserProgressService = class UserProgressService {
    prisma;
    usersService;
    constructor(prisma, usersService) {
        this.prisma = prisma;
        this.usersService = usersService;
    }
    async findAll() {
        return await this.prisma.userProgress.findMany();
    }
    async findOne(id) {
        return await this.prisma.userProgress.findUnique({ where: { id } });
    }
    async findManyByUserId(userId) {
        return await this.prisma.userProgress.findMany({
            where: { userId },
        });
    }
    async create(id, dto) {
        const userProgress = await this.prisma.userProgress.create({
            data: { ...dto, userId: id },
        });
        if (dto.exp && dto.exp > 0) {
            await this.usersService.addExp(id, dto.exp);
        }
        return userProgress;
    }
    async update(id, dto) {
        const userProgress = await this.prisma.userProgress.update({
            where: { id },
            data: dto,
        });
        if (dto.exp && dto.exp > 0) {
            const userProgressRecord = await this.prisma.userProgress.findUnique({
                where: { id },
            });
            if (!userProgressRecord) {
                throw new common_1.BadRequestException('Progresso do usuário não encontrado');
            }
            await this.usersService.addExp(userProgressRecord.userId, dto.exp);
        }
        return userProgress;
    }
    async remove(userId) {
        const userProgress = await this.prisma.userProgress.findFirst({
            where: { userId },
        });
        if (!userProgress) {
            throw new common_1.BadRequestException(`Não foi encontrado nenhum progresso para o usuário ${userId}`);
        }
        return await this.prisma.userProgress.update({
            where: { id: userProgress.id },
            data: {
                deletedAt: new Date(),
            },
        });
    }
};
exports.UserProgressService = UserProgressService;
exports.UserProgressService = UserProgressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        users_service_1.UsersService])
], UserProgressService);
//# sourceMappingURL=user-progress.service.js.map