import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: any) {
    const newUser = {
      id: Date.now(),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  remove(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return { message: 'Deleted' };
  }
}
