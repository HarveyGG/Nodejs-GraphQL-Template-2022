import { Test, TestingModule } from '@nestjs/testing';
import { HobbyModule } from './hobby.module';
import { HobbyService } from './hobby.service';

describe('HobbyService', () => {
  let service: HobbyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HobbyModule],
      providers: [HobbyService],
    }).compile();

    service = module.get<HobbyService>(HobbyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
