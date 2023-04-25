import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './schema/student.schema';
import { Lesson, LessonSchema } from 'src/lesson/schema/lesson.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
  ],
  providers: [StudentResolver, StudentService],
})
export class StudentModule {}
