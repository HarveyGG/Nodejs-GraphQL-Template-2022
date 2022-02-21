import { Schema as MongooseSchema } from 'mongoose';
import { Hobby } from '../hobby/hobby.model';

export class CreatePersonInput {
  name: string;
  hobbies: MongooseSchema.Types.ObjectId[];
}

export class ListPersonInput {
  _id?: MongooseSchema.Types.ObjectId;
  name?: string;
  hobbies?: MongooseSchema.Types.ObjectId[];
}

export class UpdatePersonInput {
  _id: MongooseSchema.Types.ObjectId;
  name?: string;
  hobbies?: MongooseSchema.Types.ObjectId[];
}
