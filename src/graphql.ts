
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Lesson {
    _id?: Nullable<string>;
    name: string;
    startDate?: Nullable<Date>;
    endDate?: Nullable<Date>;
    studentsId?: Nullable<Nullable<string>[]>;
}

export abstract class IQuery {
    abstract lesson(id: string): Nullable<Lesson> | Promise<Nullable<Lesson>>;

    abstract lessons(): Nullable<Nullable<Lesson>[]> | Promise<Nullable<Nullable<Lesson>[]>>;

    abstract student(id: string): Nullable<Student> | Promise<Nullable<Student>>;

    abstract students(): Nullable<Nullable<Student>[]> | Promise<Nullable<Nullable<Student>[]>>;
}

export abstract class IMutation {
    abstract createLesson(name: string, startDate?: Nullable<Date>, endDate?: Nullable<Date>): Nullable<Lesson> | Promise<Nullable<Lesson>>;

    abstract assignStudents(id: string, studentsId: string[]): Nullable<Lesson> | Promise<Nullable<Lesson>>;

    abstract createStudent(lessonId: string, name: string, surname: string, dateOfBirth?: Nullable<Date>): Nullable<Student> | Promise<Nullable<Student>>;
}

export class Student {
    _id?: Nullable<string>;
    name: string;
    surname?: Nullable<string>;
    dateOfBirth?: Nullable<Date>;
}

type Nullable<T> = T | null;
