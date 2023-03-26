import { Args, Resolver, Query } from '@nestjs/graphql';
import { Lesson } from 'src/graphql';

@Resolver('Lesson')
export class LessonResolver {
    @Query('getLessonById')
    async getLessonById(@Args('id') Id: string): Promise<Lesson> {
        let l: Lesson = {
            id: 'id1',
            name: 'name1',
            startDate: 'date1',
            endDate: 'date2'
        };

        return Promise.resolve(l);
    }

    @Query('getAllLessons')
    async getAllLessons(): Promise<Lesson[]> {
        let lessons: Lesson[] = new Array(
            {id: 'id1', name: 'name1', startDate: 'sd1', endDate: 'ed1'} as Lesson,
            {id: 'id2', name: 'name2', startDate: 'sd2', endDate: 'ed2'} as Lesson,
            {id: 'id3', name: 'name3', startDate: 'sd3', endDate: 'ed3'} as Lesson,
        );

        return Promise.resolve(lessons);
    }
}
