import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorators/get.user.decorator';
import { TaskService, Task, TaskPayload } from '.';

@Controller('/api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(AuthGuard())
  @Get()
  async getTasks(@GetUser() user: any): Promise<Task[]> {
    return this.taskService.getTasks(user._id);
  }

  @Get('/message')
  async getMessage(): Promise<string> {
    return 'Black Friday! Get 50% cachback on saving your first spot.';
  }

  @UseGuards(AuthGuard())
  @Get('/active')
  async getActiveTasks(@GetUser() user: any): Promise<Task[]> {
    return this.taskService.getActiveTasks(user._id);
  }

  @UseGuards(AuthGuard())
  @Get('/complete')
  async getCompleteTasks(@GetUser() user: any): Promise<Task[]> {
    return this.taskService.getCompleteTasks(user._id);
  }

  @UseGuards(AuthGuard())
  @Get('/:id')
  async getTask(@Param('id') _id: string): Promise<Task> {
    return this.taskService.getTask(_id);
  }

  @UseGuards(AuthGuard())
  @Post()
  async createTask(
    @Body() payload: TaskPayload,
    @GetUser() user: any,
  ): Promise<Task> {
    return this.taskService.createTask(user._id, payload);
  }

  @UseGuards(AuthGuard())
  @Patch('/archive')
  async archiveCompleteTasks(@GetUser() user: any): Promise<any> {
    return this.taskService.archiveCompleteTasks(user._id);
  }

  @UseGuards(AuthGuard())
  @Patch('/complete/:id')
  async makeCompleteTask(@Param('id') _id: string): Promise<any> {
    return this.taskService.makeCompleteTask(_id);
  }

  @UseGuards(AuthGuard())
  @Patch('/incomplete/:id')
  async makeIncompleteTask(@Param('id') _id: string): Promise<any> {
    return this.taskService.makeIncompleteTask(_id);
  }

  @UseGuards(AuthGuard())
  @Patch('/:id')
  async updateTask(
    @Param('id') _id: string,
    @Body() payload: TaskPayload,
  ): Promise<any> {
    return this.taskService.updateTask(_id, payload);
  }

  @UseGuards(AuthGuard())
  @Delete('/:id')
  async deleteTask(@Param('id') _id: string): Promise<any> {
    return this.taskService.deleteTask(_id);
  }
}
