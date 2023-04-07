import { LessonSimpleDTO } from '../domain/LessonSimpleDTO';

export class ClassLessonSimpleDTO {
    constructor(
        public clazzId: number,
        public title: string,
        public description: string,
        public lessons: LessonSimpleDTO[]
    ) {}
}