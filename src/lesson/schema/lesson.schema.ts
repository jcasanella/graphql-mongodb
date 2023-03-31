import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
    @Prop({ required: true })
    _id: string;

    @Prop({ required: true } )
    name: string;

    @Prop()
    startDate?: string;

    @Prop()
    endDate?: string;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);