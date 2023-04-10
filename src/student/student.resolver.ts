import { StudentService } from './student.service';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Student } from 'src/graphql';
import { v4 as uuidv4  } from 'uuid';
import { StudentDto } from './dto/student.dto';


@Resolver('Student')
export class StudentResolver {
    constructor(private readonly studentService: StudentService) {}

    @Query('student')
    async getStudentById(@Args('id') id: string): Promise<Student> {
        return this.studentService.findById(id);
    }

    @Query('students')
    async getAllStudents(): Promise<Student[]> {
        return this.studentService.getAll();
    }

    @Mutation('createStudent')
    async createStudent(@Args() studentDto: StudentDto): Promise<Student> {
        const { name, surname, dateOfBirth } = studentDto;
        return this.studentService.create(uuidv4(), name, surname, dateOfBirth);
    }
}
