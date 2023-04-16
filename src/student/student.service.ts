import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schema/student.schema';
import { Lesson } from 'src/lesson/schema/lesson.schema';
import { LessonModule } from 'src/lesson/lesson.module';

@Injectable()
export class StudentService {
    private readonly logger = new Logger(StudentService.name);
    constructor(
        @InjectModel(Student.name) private readonly studentModel: Model<Student>,
        @InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>
    ) {}

    async create(id: string, name: string, surname: string, dateOfBirth: string, lessonId: string): Promise<Student> {
        this.logger.log(`create student with id ${id}`);

        // const productFn = (lessonId: string, studentId: string) => this.lessonModel.findByIdAndUpdate(lessonId, { student: studentId}, { new: true } );

        // const createdStudent = this.studentModel.create({ _id: id, name: name, surname: surname, dateOfBirth: dateOfBirth})
        //     .then(function(doc) {
        //         return productFn(lessonId, doc._id);
        //     })

        const createdStudent = await this.studentModel.create({ _id: id, name: name, surname: surname, dateOfBirth: dateOfBirth});
        if (createdStudent) {
            this.lessonModel.findByIdAndUpdate(lessonId, { student: createdStudent._id} );
        }
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

