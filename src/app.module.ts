import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    PrismaModule,
    ProductModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
