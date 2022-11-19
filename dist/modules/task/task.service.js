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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("./task.schema");
let TaskService = class TaskService {
    constructor(task) {
        this.task = task;
    }
    async getTasks(userId) {
        const tasks = await this.task.find({ userId });
        return tasks;
    }
    async getActiveTasks(userId) {
        const filter = {
            userId,
            isActive: true,
        };
        const tasks = await this.task.find(filter);
        return tasks;
    }
    async getCompleteTasks(userId) {
        const filter = {
            userId,
            complete: true,
        };
        const tasks = await this.task.find(filter);
        return tasks;
    }
    async getTask(_id) {
        const task = await this.task.findById(_id);
        return task;
    }
    async createTask(userId, payload) {
        const task = new this.task(Object.assign(Object.assign({}, payload), { userId }));
        return task.save();
    }
    async makeCompleteTask(_id) {
        const updates = {
            complete: true,
        };
        await this.task.findByIdAndUpdate(_id, updates);
        return {
            message: `Task with id of ${_id} has been updated.`,
        };
    }
    async makeIncompleteTask(_id) {
        const updates = {
            complete: false,
        };
        await this.task.findByIdAndUpdate(_id, updates);
        return {
            message: `Task with id of ${_id} has been updated.`,
        };
    }
    async updateTask(_id, payload) {
        const updates = {
            task: payload.task,
        };
        await this.task.findByIdAndUpdate(_id, updates);
        return {
            message: `Task with id of ${_id} has been updated.`,
        };
    }
    async archiveCompleteTasks(userId) {
        const filter = {
            userId,
            complete: true,
        };
        const updates = {
            isActive: false,
        };
        await this.task.updateMany(filter, updates);
        return {
            message: 'Completed tasks have been successfully archived.',
        };
    }
    async deleteTask(_id) {
        return this.task.findByIdAndDelete(_id);
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map