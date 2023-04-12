import { ArgsType, Field } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@ArgsType()
export class LessonStudentsDto {
    @Field({ nullable: false })
    @IsUUID("4", { message: 'LessonID must be a UUID' })
    readonly id: string;
    
    @Field({ nullable: false })
    @IsUUID("4", { each: true, message: 'StudentIDs must be UUIDs' })
    readonly studentsId: string[];
}
