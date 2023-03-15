import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BooksComponent } from './components/books/books.component';
import { BookModalComponent } from '../shared/book-modal/book-modal.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, BooksComponent, BookCardComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
