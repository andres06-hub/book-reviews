import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateReviewInput {
  @MinLength(6, {
    message: 'Min 6 Characters!',
  })
  @Field()
  comment: string;

  @IsNotEmpty()
  @Field()
  userId: number;

  @IsNotEmpty()
  @Field()
  bookId: number;
}
