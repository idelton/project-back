import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/Createtask.dto'; // Assurez-vous que le nom est correct
import { PrismaService } from 'prisma/prisma.service';
import { TaskBody } from './crud-task.controller';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class CrudTaskService {


    

    constructor(private readonly prisma: PrismaService) {}
    private tasks: CreateTaskDto[] = []; // Typage de tableau pour les tâches

  
      findAll(): TaskBody[] {
        throw new Error('Method not implemented.');
      }

    //utiliser typage prisma
    //create
   
    async create(data: Prisma.TaskCreateInput): Promise<Task> {
        const task = await this.prisma.task.create({
            data,
        });
        console.log("Tâche créée : ", task);
        return task;
    }
    
    

    //Update 
    async updateTask(params: {
        where: Prisma.TaskWhereUniqueInput
    ;
        data: Prisma.TaskUpdateInput;
      }): Promise<Task> {
        const { where, data } = params;
        return this.prisma.task.update({
          data,
          where,
        });
      }

      //suprimer un tache 
      async deleteTask(where: Prisma.TaskWhereUniqueInput): Promise<Task> {
        return this.prisma.task.delete({
          where,
        });
      }
    



    /*async findById(id: number): Promise<CreateTaskDto | null> {
        const task = await this.prisma.task.findUnique({
            where: { id },
        });
        return task;
    }*/

}