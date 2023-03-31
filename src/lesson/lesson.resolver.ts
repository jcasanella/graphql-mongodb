import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Lesson } from 'src/graphql';
import { LessonService } from './lesson.service';
import { uuid } from 'uuidv4';

@Resolver('Lesson')
export class LessonResolver {
    constructor(private readonly lessonService: LessonService) {}

    @Query('lesson')
    async getLessonById(@Args('id') Id: string): Promise<Lesson> {
        let l: Lesson = {
            _id: 'id1',
            name: 'name1',
            startDate: 'date1',
            endDate: 'date2'
        };

        return Promise.resolve(l);
    }

    @Query('lessons')
    async getAllLessons(): Promise<Lesson[]> {
        let lessons: Lesson[] = new Array(
            {_id: 'id1', name: 'name1', startDate: 'sd1', endDate: 'ed1'} as Lesson,
            {_id: 'id2', name: 'name2', startDate: 'sd2', endDate: 'ed2'} as Lesson,
            {_id: 'id3', name: 'name3', startDate: 'sd3', endDate: 'ed3'} as Lesson,
        );

        return Promise.resolve(lessons);
    }

    @Mutation('createLesson')
    async createLesson(@Args('name') name: string, @Args('startDate') startDate: string, @Args('endDate') endDate: string): Promise<Lesson> {
        return this.lessonService.create(uuid(), name, startDate, endDate);
    }
}
