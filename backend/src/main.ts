import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      name:'AYV_ONBOARDING_SESSION',
      secret: 'DGHBJNK?LNJBH K?.SHKJL',
      resave: false,
      saveUninitialized: false,
      cookie:{
        maxAge: 60000      }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
