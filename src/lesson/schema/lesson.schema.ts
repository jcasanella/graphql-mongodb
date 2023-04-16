import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Student } from "src/student/schema/student.schema";

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
    @Prop({ required: true })
    _id: string;

    @Prop({ required: true } )
    name: string;

    @Prop({ required: false })
    startDate?: string;

    @Prop({ required: false })
    endDate?: string;

    // @Prop({
    //     type: [String],
    //     required: false
    // })
    // studentsId?: string[];
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }], required: false })
    students: Student[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);