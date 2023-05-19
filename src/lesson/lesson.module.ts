import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonResolver } from './lesson.resolver';
import { Lesson, LessonSchema } from './schema/lesson.schema';
import { LessonService } from './lesson.service';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
    KafkaModule,
  ],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
