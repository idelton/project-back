import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  

    Address: any;
    Task: any;
    async onModuleInit() {
        await this.$connect();
    }


}