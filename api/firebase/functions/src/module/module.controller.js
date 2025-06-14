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
exports.ModuleController = void 0;
const common_1 = require("@nestjs/common");
const module_service_1 = require("./module.service");
const auth_guard_1 = require("../auth/auth.guard");
let ModuleController = class ModuleController {
    moduleService;
    constructor(moduleService) {
        this.moduleService = moduleService;
    }
    async create(body) {
        return this.moduleService.create(body);
    }
    async updateModule(idModule, body) {
        return this.moduleService.updateModule(idModule, body);
    }
    async deleteModule(idModule) {
        return this.moduleService.deleteModule(idModule);
    }
    async getModule() {
        return this.moduleService.getModule();
    }
    async getContentModule(idModule) {
        return this.moduleService.getContentModule(idModule);
    }
    async getExercisesByContent(moduleId, contentId) {
        return this.moduleService.getExercisesByContent(moduleId, contentId);
    }
};
exports.ModuleController = ModuleController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('/:idModule'),
    __param(0, (0, common_1.Param)('idModule')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "updateModule", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('/:idModule'),
    __param(0, (0, common_1.Param)('idModule')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "deleteModule", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "getModule", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/:idModule/contents'),
    __param(0, (0, common_1.Param)('idModule')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "getContentModule", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/:moduleId/content/:contentId/exercises'),
    __param(0, (0, common_1.Param)('moduleId')),
    __param(1, (0, common_1.Param)('contentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "getExercisesByContent", null);
exports.ModuleController = ModuleController = __decorate([
    (0, common_1.Controller)('module'),
    __metadata("design:paramtypes", [module_service_1.ModuleService])
], ModuleController);
//# sourceMappingURL=module.controller.js.map