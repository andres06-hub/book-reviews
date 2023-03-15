import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/models/user.entity';
import { ResponseBook } from './dto/responseBook';
import { HttpError } from 'src/common/interfaces/error.interface';
import { faker } from '@faker-js/faker';
import { BookInterface } from './interfaces/book.interface';
import { DataUser } from './dto/data-user.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRpt: Repository<Book>,
    @InjectRepository(Review)
    private reviewRpt: Repository<Review>,
    @Inject(forwardRef(() => AuthService))
    private _authSrv: AuthService,
  ) {}
  private logger = new Logger();

  async createBook(data: CreateBookInput): Promise<Book> {
    console.table(data);
    const newBook: Book = this.bookRpt.create({
      title: data.title,
      description: data.description,
      author: data.author,
      linkImg: data.linkImg,
    });
    return await this.bookRpt.save(newBook);
  }

  async createReview(data: CreateReviewInput): Promise<Review | ResponseBook> {
    //Get user
    const userFind: User | null = await this._authSrv.findOneById(data.userId);
    if (!userFind)
      throw new NotFoundException(new ResponseBook(false, 'User not found'));
    //Get Book
    const bookFind: Book | null = await this.findOneBookById(data.bookId);
    if (!bookFind)
      throw new NotFoundException(new ResponseBook(false, 'Book not found!'));
    const newReview: Review = this.reviewRpt.create({
      comment: data.comment,
      rating: data.rating,
      user: userFind,
      book: bookFind,
    });
    this.logger.log('Created Review.');
    const review: Review = await this.reviewRpt.save(newReview);
    this.logger.log('Saved Review. ', review);
    return review;
  }

  async createSeveralBooks(quantity: number): Promise<BookInterface[]> {
    const books: BookInterface[] = [];
    this.logger.log('Creating Books...');
    for (let i = 0; i < quantity; i++) {
      books.push(
        new Book(
          faker.datatype.number(),
          faker.lorem.words(20),
          faker.name.fullName(),
          faker.company.name(),
          faker.image.imageUrl(),
        ),
      );
    }
    this.logger.log('Created Books Successfully!');
    try {
      await this.bookRpt.save(books);
    } catch (e) {
      const error: HttpError = e.driverError.detail as HttpError;
      this.logger.error(error);
      throw new BadRequestException(error);
    }
    this.logger.log('SAVE Books Successfully!');
    return books;
  }

  async findAllBook(): Promise<Book[]> {
    this.logger.log('Geting Books...');
    const books: Book[] = await this.bookRpt.find();
    this.logger.log('Books obtained.');
    return books;
  }

  async findAllReviewsOneUser(id: number): Promise<Review[] | null> {
    const userFind: User | null = await this._authSrv.findOneById(id);
    if (!userFind)
      throw new NotFoundException(new ResponseBook(false, 'User not found'));
    const reviews: Review[] = await this.reviewRpt.find({
      where: { user: userFind },
    });
    this.logger.log('Reviews Obtained');
    return reviews;
  }

  async findAllReviewsByBookId(bookId: number) {
    const book: Book | null = await this.findOneBookById(bookId);
    if (!book)
      throw new NotFoundException(new ResponseBook(false, 'Book Not Exist!'));
    const findReviews: Review[] = await this.reviewRpt.find({
      where: { book },
    });
    return findReviews;
  }

  async findOneBookById(id: number): Promise<Book | null> {
    try {
      this.logger.log('looking for book...');
      const findBook: Book | null = await this.bookRpt.findOne({
        where: {
          id: id,
        },
      });
      return findBook;
    } catch (e) {
      const error: HttpError = e.driverError.detail as HttpError;
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }

  async findOneUser(idInput: number): Promise<User> {
    const user: User | null = await this._authSrv.findOneById(idInput);
    if (!user)
      throw new NotFoundException(new ResponseBook(false, 'User Not Found'));
    this.logger.log('User data Obtained');
    return user;
  }

  //API v2
  /*
  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
  */
}
