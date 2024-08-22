import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { UserBody } from "./user.interface";




@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()//Ecoute sur l'url "/" 
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Post()//Ecoute sur l'url "/" 
  createUsers(@Body() body:UserBody): User {
    return this.userService.createUsers(body);
  }

//   @Patch()
//   updateUsers(){
//     return
//   }
   
  
//   @Delete()
//   deleteUsers(){
//     return
//   }
}



