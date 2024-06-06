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

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  updateUser(
    id: number,
    username: string,
    experience: number,
    ability: number,
    gold: number,
  ): User | undefined {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      user.username = username;
      user.experience = experience;
      user.ability = ability;
      user.gold = gold;
    }
    return user;
  }
}
