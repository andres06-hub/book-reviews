import { Module } from '@nestjs/common';
import { ConfigModule as ConfigMdl } from '@nestjs/config';
import { ConfigService } from './config.service';

@Module({
  imports: [ConfigMdl.forRoot({ envFilePath: ['app.env'] })],
  providers: [ConfigService],
  exports: [ConfigModule, ConfigService],
})
export class ConfigModule {}
