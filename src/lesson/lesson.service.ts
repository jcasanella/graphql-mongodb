import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from './schema/lesson.schema';
import { ProducerFactory } from 'src/kafka/kafka.service';

@Injectable()
export class LessonService {
  private readonly logger = new Logger(LessonService.name);

  constructor(
    @InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>,
    private readonly kafkaProducer: ProducerFactory,
  ) {
    this.kafkaProducer.start();
  }

  async create(name: string, startDate: Date, endDate: Date): Promise<Lesson> {
    this.logger.log(`create lesson with name ${name}`);
    const createdLesson = await this.lessonModel.create({
      name: name,
      startDate: startDate,
      endDate: endDate,
    });

    const msg = JSON.stringify(createdLesson);
    this.kafkaProducer.sendBatch([msg], 'lesson-topic');

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
