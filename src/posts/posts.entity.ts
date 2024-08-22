export class Posts {
  id: number;
  title: string;
  createdDate: Date;
  userId: number;

  static countPosts: number = 1;

  constructor(title: string, createdDate: Date, userId: number) {
    this.id = Posts.countPosts++;
    this.title = title;
    this.createdDate = new Date();
    this.userId = userId;
  }
}
