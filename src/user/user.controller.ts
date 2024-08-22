import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserBody } from './user.interface';

@Controller('user') //Ecoute sur l'url "/"
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  createUsers(@Body() body: UserBody): User {
    return this.userService.createUsers(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UserBody): User {
    const post = this.userService.findOne(+id);
    if (!post) {
      throw new NotFoundException('User not found');
    }
    return this.userService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): User[] {
    return this.userService.remove(+id);
  }
}
