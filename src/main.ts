import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Importar ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar o ValidationPipe globalmente
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
