import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private route: Router) {}

  onLogOut(): void {
    window.sessionStorage.clear();
    this.route.navigate(['/']);
  }
}
