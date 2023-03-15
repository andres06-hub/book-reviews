import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private loginSrv: LoginService,
    ) {}

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6), Validators.max(25)]]
  });

  public onSubmit() {
    console.warn(this.loginForm.value);
    console.warn(this.loginForm.errors);
    const { email, password } = this.loginForm.value;
    if (!email || !password) return;
    this.performLogin(email, password);
  }

  public performLogin(email: string, password: string) {
    this.loginSrv.login({ email, password });
  }
}
