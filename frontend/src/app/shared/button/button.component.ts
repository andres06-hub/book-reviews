import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public label = "";
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter()


  public onButtonClick(ev: MouseEvent) {
    this.btnClick.emit(ev);
  }
}
