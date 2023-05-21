import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configSwagger = new DocumentBuilder()
    .setTitle('Demo Test IT UNOTEK')
    .setDescription(
      'By Jacky Rahman',
    )
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: 'Please input your JWT',
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access_token',
    )
    .addBasicAuth({
      type: 'http',
      scheme: 'Basic'
    })
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('apiexplorer', app, document);

  await app.listen(3000);
}
bootstrap();
