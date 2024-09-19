import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task, TaskStatusEnum, TaskTypeEnum } from '@prisma/client';
import { CrudTaskService } from './crud-task.service.service'; 

// Définition de l'interface TaskBody
export interface TaskBody {
  name: string;
  status: TaskStatusEnum;
  description?: string; // Marqué comme optionnel
  houseRoom: string;
  roomSurface: number;
  type: TaskTypeEnum;
  projectAnnouncementId: number;
  ProjectAnnouncement:number,

}

@Controller('crud-task')
export class CrudTaskController {
  constructor(private readonly crudTaskService: CrudTaskService) {} // Injection correcte du service

  @Get(':id')
  test(@Param('id') id: number) 
  { 
    console.log('hello', id);
    return `coucou elle ${id}`;
  }
  
@Get()
findAll() :TaskBody[]{
  return this.crudTaskService.findAll();
}
  //dto controller
  @Post('create')
  create(@Body() body: TaskBody) {
    // Utilisation correcte du service injecté
    const task = this.crudTaskService.create({ 
      name:body.name,
      status:body.status,
      description:body.description,
      houseRoom:body.houseRoom,
      roomSurface:body.roomSurface,
      type:body.type,
      projectAnnouncement: {
        connect: {
          id: body.projectAnnouncementId, // regarder si body.projectAnnouncementId est passé dans la requête
        },
      }
      
    });

    // Retourne la tâche créée avec un message
    return {
    task,
      message: 'Task prête à être enregistrée'
    };
  }

  //
  @Put('update/:id')
  async updateTask(@Param('id') id: string): Promise<Task> {
    return this.crudTaskService.updateTask({
      where: { id: Number(id) },
      data: { status: TaskStatusEnum.COMPLETED }, 
    });
  }


//Delete
  @Delete('delete/:id')
  async deleteTask(@Param('id') id: string): Promise<Task> {
    return this.crudTaskService.deleteTask({ id: Number(id) });
  }

}
