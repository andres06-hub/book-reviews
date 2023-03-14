import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FormBuilder) {}

  public loginForm = this.fb.group({
    email: [],
    password: []
  });

  public onSubmit() {
    console.warn(this.loginForm.value);
  }

  public performLogin(email: string, password: string) {

  }
}
