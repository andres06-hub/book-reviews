import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private homeSrv: HomeService) {}

  books: Book[] = [
    {
      id: 1,
      title: 'Hello',
      description: 'sisisiis',
      linkImg: '...',
      author: 'Andres',
    },
  ];

  ngOnInit(): void {
    const books = this.homeSrv.getBooks().valueChanges.subscribe({
      next: (response) => {
        const books: Book[] = response.data.book as Book[];
        return (this.books = books);
      },
      error: (response) => {
        console.error(response);
      },
    });
  }
}
