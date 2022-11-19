import { TaskService, Task, TaskPayload } from '.';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(user: any): Promise<Task[]>;
    getMessage(): Promise<string>;
    getActiveTasks(user: any): Promise<Task[]>;
    getCompleteTasks(user: any): Promise<Task[]>;
    getTask(_id: string): Promise<Task>;
    createTask(payload: TaskPayload, user: any): Promise<Task>;
    archiveCompleteTasks(user: any): Promise<any>;
    makeCompleteTask(_id: string): Promise<any>;
    makeIncompleteTask(_id: string): Promise<any>;
    updateTask(_id: string, payload: TaskPayload): Promise<any>;
    deleteTask(_id: string): Promise<any>;
}
