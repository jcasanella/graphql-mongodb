import { Injectable } from '@nestjs/common';
import {
  Kafka,
  Message,
  Producer,
  ProducerBatch,
  TopicMessages,
  logLevel,
} from 'kafkajs';

@Injectable()
export class ProducerFactory {
  private producer: Producer;

  constructor() {
    console.log('Starting Kafka Producer...');
    this.producer = this.createProducer();
  }

  public async start(): Promise<void> {
    try {
      await this.producer.connect();
    } catch (error) {
      console.log('Error connecting the producer: ', error);
    }
  }

  public async shutdown(): Promise<void> {
    await this.producer.disconnect();
  }

  public async sendBatch(
    messages: Array<string>,
    topicName: string,
  ): Promise<void> {
    const kafkaMessages: Array<Message> = messages.map((message) => {
      return {
        value: message,
      };
    });

    const topicMessages: TopicMessages = {
      topic: topicName,
      messages: kafkaMessages,
    };

    const batch: ProducerBatch = {
      topicMessages: [topicMessages],
    };

    await this.producer.sendBatch(batch);
  }

  private createProducer(): Producer {
    const kafka = new Kafka({
      logLevel: logLevel.DEBUG,
      clientId: 'producer-client',
      brokers: ['localhost:9092'],
    });

    return kafka.producer();
  }
}
