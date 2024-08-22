import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserBody } from './user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUsers(body: UserBody): User {
    const user = new User(body.firstname, body.lastname, body.email);
    this.users.push(user);
    return user
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): UserBody {
    const user = this.users.find((user) => {
      return user.id === id;
    });
    return user;
  }

  update(id: number, body: UserBody):User {
    const user = this.users.findIndex((user: User) => user.id === id)
    if (!user) // return error
    
    this.users[user] = { ...this.users[user], ...body}
    return this.users[user] 
}
}