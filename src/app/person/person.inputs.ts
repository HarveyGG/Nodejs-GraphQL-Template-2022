import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreatePersonInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  hobbies: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class ListPersonInput {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  name?: string;

  @Field(() => String)
  hobbies?: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class UpdatePersonInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  name?: string;

  @Field(() => String)
  hobbies?: MongooseSchema.Types.ObjectId[];
}
