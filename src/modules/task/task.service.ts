import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskPayload } from './task.payload';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private task: Model<TaskDocument>) {}

  async getTasks(): Promise<Task[]> {
    const tasks = await this.task.find();
    return tasks;
  }

  async getTask(_id: string): Promise<Task> {
    const task = await this.task.findById(_id);
    return task;
  }

  async createTask(payload: TaskPayload): Promise<Task> {
    const task = new this.task(payload);
    return task.save();
  }
}
