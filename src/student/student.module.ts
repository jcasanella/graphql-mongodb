import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './schema/student.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Student.name, schema: StudentSchema}])],
  providers: [StudentResolver, StudentService]
})
export class StudentModule {}
