import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//habilitamos CORS
  app.enableCors();
  const config = new DocumentBuilder()
      .setTitle('API Example')
      .setDescription('The API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  //class validator
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
