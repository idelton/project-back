import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UserModule, PostsModule],
  controllers: [AppController],//Écoute les routes défini dans les controllers déclarés
  providers: [AppService],
})
export class AppModule {}
