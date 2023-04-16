import { NestjsGrammyModule } from '@grammyjs/nestjs';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [
    NestjsGrammyModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN!,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
