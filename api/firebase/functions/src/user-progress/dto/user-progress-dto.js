"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserProgressDto = exports.CreateUserProgressDto = exports.UserProgressDto = void 0;
class UserProgressDto {
    userId;
    contentId;
    duration;
    exp;
    hits;
    completedAt;
}
exports.UserProgressDto = UserProgressDto;
class CreateUserProgressDto {
    userId;
    contentId;
    exp;
    duration;
    hits;
}
exports.CreateUserProgressDto = CreateUserProgressDto;
class UpdateUserProgressDto {
    duration;
    hits;
    exp;
    completedAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.UpdateUserProgressDto = UpdateUserProgressDto;
//# sourceMappingURL=user-progress-dto.js.map