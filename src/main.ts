import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const APP_NAME = process.env.npm_package_name;
  const APP_VERSION = process.env.npm_package_version;

  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(`The ${APP_NAME} API description`)
    .setVersion(APP_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
