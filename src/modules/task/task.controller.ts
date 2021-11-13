import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService, Task, TaskPayload } from '.';

@Controller('api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':id')
  async getTask(@Param('id') _id: string): Promise<Task> {
    return this.taskService.getTask(_id);
  }

  @Post()
  async createTask(@Body() payload: TaskPayload): Promise<Task> {
    return this.taskService.createTask(payload);
  }
}
