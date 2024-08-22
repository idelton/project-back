import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';


@Module({
  imports: [],
  controllers: [PostsController],//Écoute les routes défini dans les controllers déclarés
  providers: [PostsService],
})
export class PostsModule {}