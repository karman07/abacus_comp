import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResultDocument = Result & Document;

@Schema()
export class Result {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: [0, 1, 2] })
  type: number; // 0: accuracy abacus, 1: accuracy mentally, 2: speed

  @Prop({ required: true })
  correct: number;

  @Prop({ required: true })
  wrong: number;

  @Prop({ required: true })
  left: number;
}

export const ResultSchema = SchemaFactory.createForClass(Result);
