import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Lesson } from 'src/graphql';
import { LessonService } from './lesson.service';
import { LessonDto } from './dto/lesson.dto';

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
  async createLesson(@Args() lessonDto: LessonDto): Promise<Lesson> {
    const { name, startDate, endDate } = lessonDto;
    return this.lessonService.create(name, startDate, endDate);
  }
}
