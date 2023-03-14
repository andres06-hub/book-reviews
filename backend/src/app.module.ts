import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { key } from './config/key.config';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [
    AppModule,
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseService,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src', 'schema.gql'),
    }),
    AuthModule,
    BookModule,
  ],
  controllers: [],
  providers: [DatabaseService],
  exports: [ConfigModule],
})
export class AppModule {
  static port: number | string;
  static prefix: string;

  constructor(private readonly _configSrv: ConfigService) {
    AppModule.port = this._configSrv.get(key.PORT);
    AppModule.prefix = this._configSrv.get(key.PREFIX);
  }
}
