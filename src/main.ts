import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config= new DocumentBuilder()
  .setTitle('Nest Ecommerce API')
  .setDescription(' Celebal Tech Ecomm API in NEST Framework')
  .setVersion('1.0')
  .build();
  const document= SwaggerModule.createDocument(app,config);

  SwaggerModule.setup('/api-docs', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
