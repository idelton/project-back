import { Module } from '@nestjs/common';
import { CrudTaskController } from './crud-task.controller'; // Ensure the name and path are correct
import { CrudTaskService } from './crud-task.service.service'; // Ensure the name and path are correct
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CrudTaskController], // Only controllers here
  providers: [CrudTaskService, PrismaService], // Add PrismaService here
})
export class CrudTaskModule {}
