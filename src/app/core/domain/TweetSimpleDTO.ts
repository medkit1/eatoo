export class TweetSimpleDTO {
     
  constructor(
      public tweetId: number,
      public text: string,
      public userId: number,
      public nick: string
    ) {}
}