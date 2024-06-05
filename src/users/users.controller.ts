import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body('username') username: string): User {
    return this.usersService.createUser(username);
  }

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }
}
