import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({
    required: true,
  })
  task: string;

  @Prop({
    default: true,
  })
  isActive?: boolean;

  @Prop({
    default: false,
  })
  complete?: boolean;

  @Prop({
    required: false,
  })
  userId: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
