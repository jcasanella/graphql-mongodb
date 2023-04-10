
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Lesson {
    _id: string;
    name: string;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
}

export abstract class IQuery {
    abstract lesson(id: string): Nullable<Lesson> | Promise<Nullable<Lesson>>;

    abstract lessons(): Nullable<Nullable<Lesson>[]> | Promise<Nullable<Nullable<Lesson>[]>>;

    abstract student(id: string): Nullable<Student> | Promise<Nullable<Student>>;

    abstract students(): Nullable<Nullable<Student>[]> | Promise<Nullable<Nullable<Student>[]>>;
}

export abstract class IMutation {
    abstract createLesson(name: string, startDate?: Nullable<string>, endDate?: Nullable<string>): Nullable<Lesson> | Promise<Nullable<Lesson>>;

    abstract createStudent(name: string, surname: string, dateOfBirth?: Nullable<string>): Nullable<Student> | Promise<Nullable<Student>>;
}

export class Student {
    _id: string;
    name: string;
    surname?: Nullable<string>;
    dateOfBirth?: Nullable<string>;
}

type Nullable<T> = T | null;
