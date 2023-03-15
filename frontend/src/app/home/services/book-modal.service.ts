import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface BookModalPayload {
  state: string;
  payload?: any;
}

@Injectable({
  providedIn: 'root',
})
export class BookModalService {
  constructor() {}

  private signal: Subject<BookModalPayload> = new Subject();
  public modalState$ = this.signal.asObservable();

  open(book: any) {
    this.signal.next({
      state: 'open',
      payload: book
    });
  }

  close() {
    this.signal.next({
      state: 'close',
    });
  }
}
