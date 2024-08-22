import { Controller, Get, Post, Body } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { Posts } from "./posts.entity";
import { PostsBody } from "./posts.interface";


@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()//Ecoute sur l'url "/" 
    getAllPosts(): Posts[] {
        return this.postsService.getAllPosts();
    }

    @Post()//Ecoute sur l'url "/" 
    createPosts(@Body() body:PostsBody): Posts {
    return this.postsService.createPosts(body);
    }
}