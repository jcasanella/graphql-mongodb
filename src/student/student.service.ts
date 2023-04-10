import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schema/student.schema';

@Injectable()
export class StudentService {
    private readonly logger = new Logger(StudentService.name);
    constructor(@InjectModel(Student.name) private readonly studentModel: Model<Student>) {}

    async create(id: string, name: string, surname: string, dateOfBirth: string): Promise<Student> {
        this.logger.log(`create student with id ${id}`);
        const createdStudent = await this.studentModel.create({ _id: id, name: name, surname: surname, dateOfBirth: dateOfBirth});
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

