export class User {

    constructor(
      public id: number,
      public nick: string,
      public firstname: string,
      public surname: string,
      public email: string,
      public password: string
    ) {}
}