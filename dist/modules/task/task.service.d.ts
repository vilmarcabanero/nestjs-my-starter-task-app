import { Model } from 'mongoose';
import { TaskPayload } from './task.payload';
import { Task, TaskDocument } from './task.schema';
export declare class TaskService {
    private task;
    constructor(task: Model<TaskDocument>);
    getTasks(userId: string): Promise<Task[]>;
    getActiveTasks(userId: string): Promise<Task[]>;
    getCompleteTasks(userId: string): Promise<Task[]>;
    getTask(_id: string): Promise<Task>;
    createTask(userId: string, payload: TaskPayload): Promise<Task>;
    makeCompleteTask(_id: string): Promise<any>;
    makeIncompleteTask(_id: string): Promise<any>;
    updateTask(_id: string, payload: TaskPayload): Promise<any>;
    archiveCompleteTasks(userId: string): Promise<any>;
    deleteTask(_id: string): Promise<any>;
}
