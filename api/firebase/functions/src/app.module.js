"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const ranking_module_1 = require("./ranking/ranking.module");
const schedule_1 = require("@nestjs/schedule");
const schedule_module_1 = require("./schedule/schedule.module");
const content_module_1 = require("./content/content.module");
const module_module_1 = require("./module/module.module");
const exercise_module_1 = require("./exercise/exercise.module");
const answer_module_1 = require("./answer/answer.module");
const user_progress_module_1 = require("./user-progress/user-progress.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'mysql_db',
                port: 3306,
                database: 'octopus',
                entities: [],
                username: 'root',
                password: '123',
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            ranking_module_1.RankingModule,
            schedule_1.ScheduleModule.forRoot(),
            schedule_module_1.ScheduleModule,
            content_module_1.ContentModule,
            module_module_1.ModuleModule,
            exercise_module_1.ExerciseModule,
            answer_module_1.AnswerModule,
            user_progress_module_1.UserProgressModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map