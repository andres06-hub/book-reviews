import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    private fb: FormBuilder,
    private signupSrv: SignupService,
    ) {}

  public signupForm = this.fb.group({
    username: [],
    email: [],
    password: [],
  })

  public onSubmit() {
    const { username, email, password } = this.signupForm.value;
    if (!username || !email || !password) return;
    this.performSignUp(username, email, password);
  }

  public performSignUp(username: string, email: string, password: string) {
    this.signupSrv.register({ username, email, password })
  }
}
