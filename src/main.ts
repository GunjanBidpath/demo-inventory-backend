import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 👇 this enables DTO validation globally
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({origin: 'http://localhost:3000'})
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
