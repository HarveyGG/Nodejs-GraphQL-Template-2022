import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // const cookies = req.signedCookies;
  app.use(cookieParser(configService.get('COOKIE_SECRET')));

  await app.listen(configService.get('PORT'));
}
bootstrap();
