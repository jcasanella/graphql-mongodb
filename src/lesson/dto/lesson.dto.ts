import { ArgsType, Field } from "@nestjs/graphql";
import { IsDateString, IsString, MinLength } from 'class-validator';

@ArgsType()
export class LessonDto {
    @Field()
    @MinLength(3, {
        message: 'Name is too short',
    })
    @IsString({ message: 'Name is not defined properly'})
    name: string;
    
    @Field({ nullable: true })
    @IsDateString()
    startDate?: string;
    
    @Field({ nullable: true })
    @IsDateString()
    endDate?: string;
}
