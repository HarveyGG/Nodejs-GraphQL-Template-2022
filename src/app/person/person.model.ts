import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { Hobby } from '../hobby/hobby.model';

@Schema()
export class Person {
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Hobby.name })
  hobbies: MongooseSchema.Types.ObjectId[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
