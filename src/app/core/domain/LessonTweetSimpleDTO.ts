import { TweetSimpleDTO } from './TweetSimpleDTO';

export class LessonTweetSimpleDTO {
    constructor(
        public lessonId: number,
        public title: string,
        public description: string,
        public tweets: TweetSimpleDTO[]
    ) {}
}