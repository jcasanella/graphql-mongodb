import { Test, TestingModule } from '@nestjs/testing';
import { ProducerFactory } from './kafka.service';

describe('KafkaService', () => {
  let service: ProducerFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducerFactory],
    }).compile();

    service = module.get<ProducerFactory>(ProducerFactory);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
