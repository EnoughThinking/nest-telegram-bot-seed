import {
  Admin,
  Ctx,
  Hears,
  Help,
  InjectBot,
  Message,
  Start,
  Update,
} from '@grammyjs/nestjs';
import { Logger } from '@nestjs/common';
import { Bot, Context } from 'grammy';

@Update()
export class AppService {
  private logger = new Logger(AppService.name);

  constructor(
    @InjectBot()
    private readonly bot: Bot<Context>
  ) {
    this.logger.log(
      'echo update starting',
      this.bot ? this.bot.botInfo.id : '(booting)'
    );
  }

  @Start()
  async onStart(@Ctx() ctx: Context): Promise<void> {
    // const me = await this.bot.api.getMe()
    this.logger.log('onStart!!', this.bot ? this.bot.botInfo : '(booting)');
    await ctx.reply(`Hey, I'm ${this.bot.botInfo.first_name}`);
  }

  @Help()
  async onHelp(@Ctx() ctx: Context): Promise<void> {
    await ctx.reply('Send me any text');
  }

  @Admin()
  async onAdminCommand(@Ctx() ctx: Context): Promise<void> {
    await ctx.reply('Welcome, Judge');
  }

  @Hears('greetings')
  async onMessage(
    @Ctx() ctx: Context,
    @Message('text') reversedText: string
  ): Promise<void> {
    await ctx.reply(reversedText);
  }
}
