import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor() {
    this.link = '';
    this.src = '';
    this.title = '';
    this.message = '';
  }

  @Input() link: string;
  @Input() src: string;
  @Input() title: string;
  @Input() message: string;
}
