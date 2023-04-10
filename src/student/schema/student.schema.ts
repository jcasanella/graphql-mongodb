import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
    @Prop({ required: true })
    _id: string;

    @Prop({ required: true } )
    name: string;

    @Prop()
    surname: string;

    @Prop()
    dateOfBirth?: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);