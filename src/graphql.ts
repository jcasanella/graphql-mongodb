
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
}

export abstract class IMutation {
    abstract createLesson(name: string, startDate?: Nullable<string>, endDate?: Nullable<string>): Nullable<Lesson> | Promise<Nullable<Lesson>>;
}

type Nullable<T> = T | null;
