import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';

@Resolver(() => [Book, Review])
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createOneBook(@Args('createBook') data: CreateBookInput) {
    return this.bookService.createBook(data);
  }

  @Mutation(() => Review)
  async createReview(@Args('createReview') data: CreateReviewInput) {
    return await this.bookService.createReview(data);
  }

  @Mutation(() => [Book])
  async createSaveralBooks(@Args('quantity') data: number) {
    return await this.bookService.createSeveralBooks(data);
  }

  @Query(() => [Book], { name: 'book' })
  async findAllBook(): Promise<Book[]> {
    return await this.bookService.findAllBook();
  }

  @Query(() => [Review], { name: 'reviewsOneUser' })
  async findAllReviewsUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Review[]> {
    return await this.bookService.findAllReviewsOneUser(id);
  }

  //API-V2
  /*
  @Mutation(() => Book)
  updateBook(@Args('updateBook') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }
  */
}
