import { Review } from '../entities/review.entity';

export class DataUser {
  constructor(id: number, username: string, email: string, reviews: Review[]) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.reviews = reviews;
  }
  private id: number;
  private username: string;
  private email: string;
  private reviews: Review[] | [];
}
