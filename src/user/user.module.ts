import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController], //Écoute les routes défini dans les controllers déclarés
  providers: [UserService],
})
export class UserModule {}
