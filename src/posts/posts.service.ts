import { Injectable } from '@nestjs/common';
import { PostsBody } from './posts.interface';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
    
    private posts:Posts[] = []; 

    getAllPosts(): Posts[] {
        return this.posts;
      }

    createPosts(body:PostsBody):Posts{
        const post = new Posts(body.title, body.createdDate, body.userId)
        this.posts.push(post)

        return post
    }  
    
    
}