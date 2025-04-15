import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL, // 👈 force it to use this
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  // If you want graceful shutdowns:
  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on('beforeExit' as any, async () => {
  //     await app.close();
  //   });
  // }
}
