import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  app.enableCors({
    origin: frontendUrl.split(',').map((o) => o.trim()),
    methods: ['GET', 'POST', 'OPTIONS'],
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`Oceanhold API listening on port ${port}`);
}
bootstrap();
