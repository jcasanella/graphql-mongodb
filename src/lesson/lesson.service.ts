import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from './schema/lesson.schema';
import { Kafka, logLevel } from 'kafkajs';

@Injectable()
export class LessonService {
  private readonly logger = new Logger(LessonService.name);
  private readonly kafkaClient = new Kafka({
    logLevel: logLevel.DEBUG,
    clientId: 'studentsApp',
    brokers: ['localhost:9092'],
  });
  private readonly producer = this.kafkaClient.producer();

  constructor(
    @InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>,
  ) {}

  async create(name: string, startDate: Date, endDate: Date): Promise<Lesson> {
    this.logger.log(`create lesson with name ${name}`);
    const createdLesson = await this.lessonModel.create({
      name: name,
      startDate: startDate,
      endDate: endDate,
    });

    await this.producer.connect().then(() => {
      this.producer.send({
        topic: 'lesson-topic',
        messages: [{ value: JSON.stringify(createdLesson) }],
      });
    });

    return createdLesson;
  }

  async findById(id: string): Promise<Lesson> {
    this.logger.log(`findById lesson with id ${id}`);
    const lesson = await this.lessonModel.findById(id).exec();
    return lesson;
  }

  async getAll(): Promise<Lesson[]> {
    this.logger.log(`getAll lessons`);
    const lessons = await this.lessonModel.find({});
    return lessons;
  }
}
