import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schema/student.schema';
import { Lesson } from 'src/lesson/schema/lesson.schema';

@Injectable()
export class StudentService {
  private readonly logger = new Logger(StudentService.name);
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
    @InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>,
  ) {}

  async create(
    name: string,
    surname: string,
    dateOfBirth: Date,
    lessonId: string,
  ): Promise<Student> {
    this.logger.log(`create student with name ${name}`);

    const createdStudent = this.studentModel
      .create({ name: name, surname: surname, dateOfBirth: dateOfBirth })
      .then((student) => {
        const st = [student._id];
        this.lessonModel
          .findByIdAndUpdate(
            lessonId,
            { $addToSet: { students: { $each: st } } },
            { new: true },
          )
          .exec();

        return student;
      });

    return createdStudent;
  }

  async findById(id: string): Promise<Student> {
    this.logger.log(`findById student with id ${id}`);
    const student = await this.studentModel.findById(id).exec();
    return student;
  }

  async getAll(): Promise<Student[]> {
    this.logger.log(`getAll students`);
    const students = await this.studentModel.find({});
    return students;
  }
}
