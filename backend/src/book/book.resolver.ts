import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/models/user.entity';
import { ResponseBook } from './dto/responseBook';

@Resolver(() => [Book, Review])
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Book)
  createOneBook(@Args('createBook') data: CreateBookInput) {
    return this.bookService.createBook(data);
  }

  @Mutation(() => Review)
  async createReview(@Args('createReview') data: CreateReviewInput) {
    return await this.bookService.createReview(data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [Book])
  async createSaveralBooks(@Args('quantity') data: number) {
    return await this.bookService.createSeveralBooks(data);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Book], { name: 'book' })
  async findAllBook(): Promise<Book[]> {
    return await this.bookService.findAllBook();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Review], { name: 'reviewsOneUser' })
  async findAllReviewsUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Review[]> {
    return await this.bookService.findAllReviewsOneUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => User, { name: 'user' })
  async getUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<ResponseBook | User> {
    return await this.bookService.findOneUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Review], { name: 'getReviewsByBookId' })
  getReviewsById(@Args('bookId', { type: () => Int }) bookId: number) {
    return this.bookService.findAllReviewsByBookId(bookId);
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
