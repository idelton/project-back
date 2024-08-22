import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserBody } from './user.interface';

@Injectable()
export class UserService {
  createUsers(body: UserBody): User {
      throw new Error("Method not implemented.");
  }
  private users:User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  create(body:UserBody):User{
    const user = new User(body.firstname, body.lastname, body.email)
    this.users.push(user)

    return user
  }


}