"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModuleDto = exports.ModuleDto = void 0;
class ModuleDto {
    id;
    label;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.ModuleDto = ModuleDto;
class CreateModuleDto {
    label;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.CreateModuleDto = CreateModuleDto;
//# sourceMappingURL=module-dto.js.map