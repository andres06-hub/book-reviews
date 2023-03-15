import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateReviewInput {
  @MinLength(6, {
    message: 'Min 6 Characters!',
  })
  @Field()
  comment: string;

  @MinLength(1, {
    message: 'Rating incorrect, 1-5',
  })
  @MaxLength(5, {
    message: 'Rating incorrect, 1-5',
  })
  @Field(() => Int)
  rating: number;

  @IsNotEmpty()
  @Field(() => Int)
  userId: number;

  @IsNotEmpty()
  @Field(() => Int)
  bookId: number;
}
