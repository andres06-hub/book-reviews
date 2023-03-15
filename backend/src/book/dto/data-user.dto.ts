import { Field, InputType, Int } from '@nestjs/graphql';
import { Review } from '../entities/review.entity';

@InputType()
export class DataUser {
  constructor(id: number, username: string, email: string, reviews: Review[]) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.reviews = reviews;
  }
  @Field(() => Int)
  private id: number;
  @Field()
  private username: string;
  @Field()
  private email: string;
  @Field(() => [Review])
  private reviews: Review[] | [];
}
