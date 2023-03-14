import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';

@Resolver(() => [Book, Review])
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(@Args('createBook') data: CreateBookInput) {
    return this.bookService.createBook(data);
  }

  @Mutation(() => Review)
  async createReview(@Args('createReview') data: CreateReviewInput) {
    return await this.bookService.createReview(data);
  }

  @Query(() => [Book], { name: 'book' })
  findAll() {
    return this.bookService.findAll();
  }

  // @Query(() => Book, { name: 'book' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.bookService.findOne(id);
  // }

  @Mutation(() => Book)
  updateBook(@Args('updateBook') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }
}
