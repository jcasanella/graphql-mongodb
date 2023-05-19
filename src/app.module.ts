import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { LessonModule } from './lesson/lesson.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    MongooseModule.forRoot('mongodb://localhost/school'),
    LessonModule,
    StudentModule,
    KafkaModule,
  ],
})
export class AppModule {}
