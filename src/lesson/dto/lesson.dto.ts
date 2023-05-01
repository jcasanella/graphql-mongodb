import { ArgsType, Field } from '@nestjs/graphql';
import { IsDateString, IsString, MinLength } from 'class-validator';

@ArgsType()
export class LessonDto {
  @Field()
  @MinLength(3, {
    message: 'Name is too short',
  })
  @IsString({ message: 'Name is not defined properly' })
  readonly name: string;

  @Field({ nullable: true })
  @IsDateString({}, { message: 'StartDate is not a valid date' })
  readonly startDate?: Date;

  @Field({ nullable: true })
  @IsDateString({}, { message: 'EndDate is not a valid date' })
  readonly endDate?: Date;
}
