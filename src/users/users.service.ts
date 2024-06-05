import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  username: string;
  experience: number;
  ability: number;
  gold: number;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  createUser(username: string): User {
    const newUser: User = {
      id: this.users.length + 1,
      username,
      experience: 0,
      ability: 0,
      gold: 0,
    };
    this.users.push(newUser);
    return newUser;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
