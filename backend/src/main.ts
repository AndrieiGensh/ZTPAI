/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger : ['debug', 'log', 'error', 'warn']});
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
