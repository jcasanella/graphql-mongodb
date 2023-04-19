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
        @InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>
    ) {}

    async create(id: string, name: string, surname: string, dateOfBirth: string, lessonId: string): Promise<Student> {
        this.logger.log(`create student with id ${id}`);

        const createdStudent2 = this.studentModel.create({ name: name, surname: surname, dateOfBirth: dateOfBirth})
            .then(student => {
                console.log(`aaaaaaaaaaaaaaaaaaa ${lessonId} student: ${student._id} ${student.name}`);

                const st = [student._id]
                const less = this.lessonModel.findByIdAndUpdate(lessonId, { $addToSet: { students: { $each: st }}} , { new: true })
                    .exec()
                    .then(l => console.log(`${l.name}`))
                console.log(`${less}`)


                return student;
            })

        return createdStudent2;
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

