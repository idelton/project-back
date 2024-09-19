import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { CrudTaskModule } from './crud-task/crud-task.module';
import { PrismaModule } from '../prisma/prisma.module';
import { CrudTaskService } from './crud-task/crud-task.service.service';

@Module({
  imports: [UserModule, PostsModule, CrudTaskModule, PrismaModule],
  controllers: [AppController], //Écoute les routes défini dans les controllers déclarés
  providers: [AppService,CrudTaskService],
})
export class AppModule {}
