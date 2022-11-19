import { Document } from 'mongoose';
export declare type TaskDocument = Task & Document;
export declare class Task {
    task: string;
    isActive?: boolean;
    complete?: boolean;
    userId: string;
}
export declare const TaskSchema: import("mongoose").Schema<Document<Task, any, any>, import("mongoose").Model<Document<Task, any, any>, any, any, any>, {}>;
