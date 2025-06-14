"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UpdateUserDto = exports.CreateUserDto = void 0;
class CreateUserDto {
    name;
    email;
    password;
}
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto {
    name;
    email;
    password;
}
exports.UpdateUserDto = UpdateUserDto;
class User {
    id;
    name;
    email;
    password;
    alreadyDoneTutorial;
    lastLifeLostAt;
    exp;
    life;
    createdAt;
    updatedAt;
}
exports.User = User;
//# sourceMappingURL=create-user-dto.js.map