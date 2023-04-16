import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from './schema/lesson.schema';
import { Student } from 'src/student/schema/student.schema';

@Injectable()
export class LessonService {
    private readonly logger = new Logger(LessonService.name);
    constructor(@InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>) {}
    // @InjectModel(Student.name) private readonly studentModel: Model<Student>) {}

    async create(id: string, name: string, startDate: string, endDate: string): Promise<Lesson> {
        this.logger.log(`create lesson with id ${id}`);
        const createdLesson = await this.lessonModel.create({ _id: id, name: name, startDate: startDate, endDate: endDate});
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

    // async assignStudents(id: string, studentsId: string[]): Promise<Lesson> {
    //     this.logger.log(`assignStudents with LessonId ${id} and StudentsId ${studentsId}`);
    //     // let lesson = await this.lessonModel.findById(id);
    //     // if (lesson) {   // Throws DocumentNotFoundError
    //     //     let students = new Set([...studentsId, ...lesson.studentsId]);
    //     //     Array.from(students).map(async (_) => {
    //     //         const student = await this.studentModel.findById(_, 'name surname')
    //     //     })
    //     //     lesson = await this.lessonModel.findByIdAndUpdate(id, { studentsId: Array.from(students) }, { returnOriginal: false });
    //     // }

    //     return undefined;
    // }
}
