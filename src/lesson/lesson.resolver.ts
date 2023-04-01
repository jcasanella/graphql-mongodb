import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Lesson } from 'src/graphql';
import { LessonService } from './lesson.service';
import { v4 as uuidv4  } from 'uuid';

@Resolver('Lesson')
export class LessonResolver {
    constructor(private readonly lessonService: LessonService) {}

    @Query('lesson')
    async getLessonById(@Args('id') id: string): Promise<Lesson> {
        return this.lessonService.findById(id);
    }

    @Query('lessons')
    async getAllLessons(): Promise<Lesson[]> {
        return this.lessonService.getAll();
    }

    @Mutation('createLesson')
    async createLesson(@Args('name') name: string, @Args('startDate') startDate: string, @Args('endDate') endDate: string): Promise<Lesson> {
        return this.lessonService.create(uuidv4(), name, startDate, endDate);
    }
}
