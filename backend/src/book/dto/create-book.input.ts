import { InputType, Field } from '@nestjs/graphql';
import { Review } from '../entities/review.entity';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateBookInput {
  @IsNotEmpty({ message: 'Required field' })
  @Field()
  title: string;
  @Field()
  linkImg: string;
  @IsNotEmpty({ message: 'Required field' })
  @Field()
  author: string;
  @IsNotEmpty({ message: 'Required field' })
  @Field()
  description: string;
  // @Field(() => [Review])
  // reviews?: Review[];
  @IsString()
  @Field(() => [String])
  reviews?: string[];
}
