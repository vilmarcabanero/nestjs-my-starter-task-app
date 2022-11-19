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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../../decorators/get.user.decorator");
const _1 = require(".");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async getTasks(user) {
        return this.taskService.getTasks(user._id);
    }
    async getMessage() {
        return 'Black Friday! Get 50% cachback on saving your first spot.';
    }
    async getActiveTasks(user) {
        return this.taskService.getActiveTasks(user._id);
    }
    async getCompleteTasks(user) {
        return this.taskService.getCompleteTasks(user._id);
    }
    async getTask(_id) {
        return this.taskService.getTask(_id);
    }
    async createTask(payload, user) {
        return this.taskService.createTask(user._id, payload);
    }
    async archiveCompleteTasks(user) {
        return this.taskService.archiveCompleteTasks(user._id);
    }
    async makeCompleteTask(_id) {
        return this.taskService.makeCompleteTask(_id);
    }
    async makeIncompleteTask(_id) {
        return this.taskService.makeIncompleteTask(_id);
    }
    async updateTask(_id, payload) {
        return this.taskService.updateTask(_id, payload);
    }
    async deleteTask(_id) {
        return this.taskService.deleteTask(_id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Get)(),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Get)('/message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getMessage", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Get)('/active'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getActiveTasks", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Get)('/complete'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getCompleteTasks", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTask", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_1.TaskPayload, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Patch)('/archive'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "archiveCompleteTasks", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Patch)('/complete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "makeCompleteTask", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Patch)('/incomplete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "makeIncompleteTask", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, _1.TaskPayload]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('/api/tasks'),
    __metadata("design:paramtypes", [_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map