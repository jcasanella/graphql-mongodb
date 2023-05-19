import { Module } from '@nestjs/common';
import { ProducerFactory } from './kafka.service';

@Module({
  providers: [ProducerFactory],
  exports: [ProducerFactory],
})
export class KafkaModule {}
