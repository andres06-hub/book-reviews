import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book, CreateReview } from '../interfaces/book.interface';
import { Apollo } from 'apollo-angular';
import {
  CREATE_REVIEW,
  GET_REVIEWS_BY_BOOKID,
} from '../../common/graphql.queries';

export interface BookModalPayload {
  state: string;
  payload?: any;
}

@Injectable({
  providedIn: 'root',
})
export class BookModalService {
  constructor(private _apollo: Apollo) {}

  private signal: Subject<BookModalPayload> = new Subject();
  public modalState$ = this.signal.asObservable();

  open(book: Book) {
    this.signal.next({
      state: 'open',
      payload: book,
    });
  }

  close() {
    this.signal.next({
      state: 'close',
    });
  }

  getReviews(bookId: number) {
    return this._apollo.watchQuery<any>({
      query: GET_REVIEWS_BY_BOOKID,
      variables: {
        bookId: bookId,
      },
    });
  }

  createReview(data: CreateReview) {
    return this._apollo.mutate<any>({
      mutation: CREATE_REVIEW,
      variables: {
        comment: data.comment,
        rating: data.rating,
        userId: data.userId,
        bookId: data.bookId,
      },
    });
  }
}
