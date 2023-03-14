import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Review } from 'src/book/entities/review.entity';
import { Book } from 'src/book/entities/book.entity';
import { ConfigService } from 'src/config/config.service';
import { key } from 'src/config/key.config';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const config: TypeOrmModuleOptions = {
      type: 'mysql',
      host: this.configService.get<string>(key.DB_HOST),
      port: this.configService.get<number>(key.DB_PORT),
      username: this.configService.get<string>(key.DB_USER),
      password: this.configService.get<string>(key.DB_PWD),
      database: this.configService.get<string>(key.DB_NAME),
      entities: [User, Review, Book],
      synchronize: true,
      autoLoadEntities: true,
    };
    return config;
  }
}
