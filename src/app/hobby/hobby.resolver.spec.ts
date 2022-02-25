import { Test, TestingModule } from '@nestjs/testing';
import { Hobby, HobbyDocument } from './hobby.model';
import { HobbyModule } from './hobby.module';
import { HobbyResolver } from './hobby.resolver';
import { HobbyService } from './hobby.service';
import { Model } from 'mongoose';

describe('HobbyResolver', () => {
  let resolver: HobbyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [new Model<HobbyDocument>()],
      providers: [HobbyService, HobbyResolver],
    }).compile();

    resolver = module.get<HobbyResolver>(HobbyResolver);
  });

  it('should be defined', async () => {
    expect(resolver).toBeDefined();
  });
});
