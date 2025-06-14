"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContentDto = exports.ContentDto = void 0;
class ContentDto {
    id;
    label;
    moduleId;
    completedAt;
    createdAt;
    updatedAt;
    deletedAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.ContentDto = ContentDto;
class CreateContentDto {
    label;
    duration;
    exp;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.CreateContentDto = CreateContentDto;
//# sourceMappingURL=content-dto.js.map