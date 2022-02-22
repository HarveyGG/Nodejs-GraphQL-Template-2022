import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // const cookies = req.signedCookies;
  // response.cookie('key', 'value')
  app.use(cookieParser(configService.get('COOKIE_SECRET')));

  app.use(helmet());

  await app.listen(configService.get('PORT'));
}
bootstrap();
