import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'verbose'],
    cors: true,
  });
  app.setGlobalPrefix(AppModule.prefix);
  await app.listen(AppModule.port);
}
bootstrap();
