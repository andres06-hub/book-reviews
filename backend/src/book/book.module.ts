import { Module, forwardRef } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Review } from './entities/review.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book, Review]),
    forwardRef(() => AuthModule),
  ],
  providers: [BookResolver, BookService],
})
export class BookModule {}
