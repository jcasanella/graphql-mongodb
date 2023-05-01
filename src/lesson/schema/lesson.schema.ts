import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Student } from 'src/student/schema/student.schema';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  startDate?: Date;

  @Prop({ required: false })
  endDate?: Date;

  idObj: Types.ObjectId;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Student.name }])
  students: Student[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
