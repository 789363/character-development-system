import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
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

  @Get(':id')
  getUserById(@Param('id') id: number): User | undefined {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: number,
    @Body()
    userData: {
      username: string;
      experience: number;
      ability: number;
      gold: number;
    },
  ): User | undefined {
    return this.usersService.updateUser(
      id,
      userData.username,
      userData.experience,
      userData.ability,
      userData.gold,
    );
  }
}
