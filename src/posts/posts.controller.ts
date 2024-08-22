import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './posts.entity';
import { PostsBody } from './posts.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get() //Ecoute sur l'url "/"
  findAll(): Posts[] {
    return this.postsService.findAll();
  }

  @Get(':id') //Ecoute sur l'url "/"
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Post() //Ecoute sur l'url "/"
  createPosts(@Body() body: PostsBody): Posts {
    return this.postsService.createPosts(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: PostsBody): Posts {
    const post = this.postsService.findOne(+id);
    if (!post) {
      throw new NotFoundException('Posts not found');
    }
    return this.postsService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Posts[] {
    return this.postsService.remove(+id);
  }
}
