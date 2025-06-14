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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.user.findMany();
    }
    async findOne(username) {
        return this.prisma.user.findUnique({
            where: {
                email: username,
            },
        });
    }
    async createUser(data) {
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });
        if (existingUser) {
            throw new common_1.BadRequestException('Este e-mail já está cadastrado. Por favor, use outro ou entre em contato com o suporte.');
        }
        const hashedPassword = await this.hashPassword(data.password);
        return this.prisma.user.create({
            data: {
                ...data,
                password: hashedPassword,
            },
        });
    }
    async updateUser(id, data) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.BadRequestException('Usuario não encontrado.');
        }
        if (data.password) {
            data.password = await this.hashPassword(data.password);
        }
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
    async completeTutorial(id) {
        return this.prisma.user.update({
            where: { id },
            data: { alreadyDoneTutorial: true },
        });
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }
    async removeLife(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.BadRequestException('Usuario não encontrado.');
        }
        if (user.life <= 0) {
            throw new common_1.BadRequestException('O usuário não tem vidas para ser removidas.');
        }
        const newLife = user.life - 1;
        if (newLife === 0) {
            await this.prisma.user.update({
                where: { id },
                data: {
                    lastLifeLostAt: new Date(),
                },
            });
        }
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: { life: newLife },
        });
        return updatedUser;
    }
    async addLife(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.BadRequestException('Usuário não encontrado.');
        }
        if (user.life >= 3) {
            throw new common_1.BadRequestException('O máximo sao 3 vidas por usuário.');
        }
        const newLife = user.life + 1;
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: { life: newLife },
        });
        return updatedUser;
    }
    async recoveryLife(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.BadRequestException('Usuário não encontrado.');
        }
        if (user.exp < 100) {
            throw new common_1.BadRequestException('User does not have enough experience points');
        }
        if (user.life >= 3) {
            throw new common_1.BadRequestException('O máximo são 3 vidas por usuário.');
        }
        const newLife = user.life + 1;
        const newExp = user.exp - 100;
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: {
                life: newLife,
                exp: newExp,
            },
        });
        return updatedUser;
    }
    async addExp(id, exp) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.BadRequestException('Usuario não encontrado.');
        }
        const newExp = user.exp + exp;
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: { exp: newExp },
        });
        return updatedUser;
    }
    async removeExp(id, exp) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.BadRequestException('Usuario não encontrado.');
        }
        const newExp = user.exp - exp;
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: { exp: newExp },
        });
        return updatedUser;
    }
    async findUsersWithOneLife() {
        return this.prisma.user.findMany({
            where: {
                life: 0,
            },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map