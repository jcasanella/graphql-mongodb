import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from './schema/lesson.schema';

@Injectable()
export class LessonService {
    constructor(@InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>) {}

    async create(id: string, name: string, startDate: string, endDate: string): Promise<Lesson> {
        const createdLesson = await this.lessonModel.create({ _id: id, name: name, startDate: startDate, endDate: endDate});
        return createdLesson;
    }
}
