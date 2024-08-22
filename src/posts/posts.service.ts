import { Injectable, NotFoundException } from '@nestjs/common';
import { PostsBody } from './posts.interface';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
  private posts: Posts[] = [];

  createPosts(body: PostsBody): Posts {
    const post = new Posts(body.title, body.createdDate, body.userId);
    this.posts.push(post);

    return post;
  }

  findAll(): Posts[] {
    return this.posts;
  }

  findOne(id: number): Posts {
    const post = this.posts.find((post) => post.id === id);
    console.log(post);
    return post;
  }

  update(id: number, body: PostsBody): Posts {
    const post = this.posts.findIndex((post: Posts) => post.id === id);
    if (!post)
      // return error

      this.posts[post] = { ...this.posts[post], ...body };
    return this.posts[post];
  }

  remove(id: number): Posts[] {
    const post = this.posts.findIndex((post) => post.id === id);
    if (post === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.posts.splice(post, 1);
    return this.posts;
  }
}
