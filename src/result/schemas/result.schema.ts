import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResultDocument = Result & Document;

@Schema()
export class Result {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string; // 0: accuracy abacus, 1: accuracy mentally, 2: speed

  @Prop({ required: true })
  correct: number;

  @Prop({ required: true })
  wrong: number;
}

export const ResultSchema = SchemaFactory.createForClass(Result);
