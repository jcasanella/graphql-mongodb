import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

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

    @Prop({
        type: [String],
        required: false
    })
    students?: string[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);