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
var ScheduleService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../prisma/prisma.service");
const users_service_1 = require("../users/users.service");
let ScheduleService = ScheduleService_1 = class ScheduleService {
    prisma;
    usersService;
    logger = new common_1.Logger(ScheduleService_1.name);
    constructor(prisma, usersService) {
        this.prisma = prisma;
        this.usersService = usersService;
    }
    async handleLifeRecovery() {
        const users = await this.usersService.findUsersWithOneLife();
        this.logger.log(`Verificando recuperação de vida para ${users.length} usuários`);
        for (const user of users) {
            if (this.shouldRecoverLife(user)) {
                await this.usersService.addLife(user.id);
                this.logger.log(`Vida recuperada para o usuário ${user.id}`);
            }
        }
    }
    shouldRecoverLife(user) {
        if (!user.lastLifeLostAt) {
            this.logger.log(`Usuário ${user.id} não tem lastLifeLostAt definido`);
            return false;
        }
        const now = new Date();
        const lastLifeLostAt = new Date(user.lastLifeLostAt);
        const oneHour = 60 * 60 * 1000;
        const timeSinceLastLifeLost = now.getTime() - lastLifeLostAt.getTime();
        if (timeSinceLastLifeLost < oneHour) {
            this.logger.log(`Ainda não passou 1 hora para o usuário ${user.id}`);
            return false;
        }
        return true;
    }
};
exports.ScheduleService = ScheduleService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_10_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduleService.prototype, "handleLifeRecovery", null);
exports.ScheduleService = ScheduleService = ScheduleService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        users_service_1.UsersService])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map