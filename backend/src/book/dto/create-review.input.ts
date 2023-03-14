import { InputType, Field } from '@nestjs/graphql';
import { Book } from '../entities/book.entity';
import { User } from 'src/models/user.entity';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateReviewInput {
  @MinLength(6, {
    message: 'Min 6 Characters!',
  })
  @Field()
  comment: string;

  // @IsNotEmpty()
  // @Field(() => User)
  // user: User;

  // @IsNotEmpty()
  // @Field(() => Book)
  // book: Book;

  @IsNotEmpty()
  @Field()
  userId: number;

  @IsNotEmpty()
  @Field()
  bookId: number;
}
