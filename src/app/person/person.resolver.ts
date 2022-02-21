import { Args, Query, Resolver } from '@nestjs/graphql';
import { Person } from './person.model';
import { PersonService } from './person.service';
import { Schema as MongooseSchema } from 'mongoose';
import { ListPersonInput } from './person.inputs';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => Person)
  async person(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.personService.getById(_id);
  }

  @Query(() => Person)
  async persons(
    @Args('filters', { nullable: true }) filters?: ListPersonInput,
  ) {
    return this.personService.list(filters);
  }
}
