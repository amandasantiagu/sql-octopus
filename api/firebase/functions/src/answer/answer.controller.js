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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerController = void 0;
const common_1 = require("@nestjs/common");
const answer_service_1 = require("./answer.service");
const answer_dto_1 = require("./dto/answer-dto");
const auth_guard_1 = require("../auth/auth.guard");
let AnswerController = class AnswerController {
    answerService;
    constructor(answerService) {
        this.answerService = answerService;
    }
    async findAll() {
        return this.answerService.findAll();
    }
    async findOne(id) {
        return this.answerService.findOne(id);
    }
    async findOneByExerciseId(exerciseId) {
        return this.answerService.findOneByExerciseId(exerciseId);
    }
    async create(answerDto) {
        return this.answerService.create(answerDto);
    }
    async update(id, answerDto) {
        return this.answerService.update(id, answerDto);
    }
    async updateByExerciseId(exerciseId, answerDto) {
        return this.answerService.updateByExerciseId(exerciseId, answerDto);
    }
    async remove(id) {
        return this.answerService.remove(id);
    }
};
exports.AnswerController = AnswerController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('exercise/:exerciseId'),
    __param(0, (0, common_1.Param)('exerciseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "findOneByExerciseId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answer_dto_1.AnswerDto]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, answer_dto_1.AnswerDto]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('/exerciseId/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, answer_dto_1.AnswerDto]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "updateByExerciseId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "remove", null);
exports.AnswerController = AnswerController = __decorate([
    (0, common_1.Controller)('answers'),
    __metadata("design:paramtypes", [answer_service_1.AnswerService])
], AnswerController);
//# sourceMappingURL=answer.controller.js.map