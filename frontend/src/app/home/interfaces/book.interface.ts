export interface Book {
  id: number;
  title: string;
  description: string;
  linkImg: string;
  author: string;
  reviews?: Review[];
}

export interface Review {
  id: string;
  comment: string;
  rating: number;
  createAt: string;
}

export interface ResponseBook {
  status: boolean;
  message: string;
  data?: object;
}

export interface CreateReview {
  comment: string;
  rating: number;
  userId: number;
  bookId: number;
}
