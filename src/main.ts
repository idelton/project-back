import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //Appel app.module.ts (Point d'entrée de l'app)
  await app.listen(3000);//Écoute sur le port 3000
}
bootstrap();
