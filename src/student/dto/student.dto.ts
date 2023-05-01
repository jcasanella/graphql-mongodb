import { ArgsType, Field } from '@nestjs/graphql';
import { IsDateString, IsString, IsUUID, MinLength } from 'class-validator';

@ArgsType()
export class StudentDto {
  @Field()
  @MinLength(3, {
    message: 'Name is too short',
  })
  @IsString({ message: 'Name is not defined properly' })
  name: string;

  @Field()
  @MinLength(3, {
    message: 'Surname is too short',
  })
  @IsString({ message: 'Surname is not defined properly' })
  surname: string;

  @Field({ nullable: true })
  @IsDateString({}, { message: 'DateOfBirth is not a valid date' })
  dateOfBirth?: Date;

  @Field()
  @IsUUID('4', { message: 'LessonID is not a valid UUID' })
  lessonId: string;
}
