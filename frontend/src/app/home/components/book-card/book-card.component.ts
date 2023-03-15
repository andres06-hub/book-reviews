import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { BookModalService } from '../../services/book-modal.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  constructor(private bookModalSrv: BookModalService) {}

  @Input() book: Book = {
    id: 0,
    title: '',
    description: '',
    author: '',
    linkImg: '',
  };

  onSeeMore(): void {
    this.bookModalSrv.open(this.book);
  }
}
