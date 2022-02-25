import { Test, TestingModule } from '@nestjs/testing';
import { Person } from './person.model';
import { PersonResolver } from './person.resolver';
import { PersonService } from './person.service';

describe('PersonResolver', () => {
  let resolver: PersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Person, PersonService, PersonResolver],
    }).compile();

    resolver = module.get<PersonResolver>(PersonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
