import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/models/user.entity';
import { ResponseBook } from './dto/responseBook';
import { HttpError } from 'src/common/interfaces/error.interface';

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

  //TODO: create book
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
      user: userFind,
      book: bookFind,
    });
    return await this.reviewRpt.save(newReview);
  }

  async findAllBook(): Promise<Book[]> {
    return this.bookRpt.find();
  }

  async findAllReviewsOneUser(id: number): Promise<Review[] | null> {
    const userFind: User | null = await this._authSrv.findOneById(id);
    if (!userFind)
      throw new NotFoundException(new ResponseBook(false, 'User not found'));
    return await this.reviewRpt.find({
      where: { user: userFind },
    });
  }

  async findOneBookById(id: number): Promise<Book | null> {
    try {
      this.logger.log('looking for book...');
      const findUser: Book | null = await this.bookRpt.findOne({
        where: {
          id: id,
        },
      });
      return findUser;
    } catch (e) {
      const error: HttpError = e.driverError.detail as HttpError;
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
