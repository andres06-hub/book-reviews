import { Review } from '../entities/review.entity';

export interface BookInterface {
  id: number;
  title: string;
  description: string;
  linkImg: string;
  author: string;
  reviews?: Review[];
}

export interface UserDatainterface {
  id: number;
  username: string;
  email: string;
  reviews: Review[] | [];
}
