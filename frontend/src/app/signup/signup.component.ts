import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private fb: FormBuilder) {}

  public signupForm = this.fb.group({
    username: [],
    emial: [],
    password: [],
  })

  public onSubmit() {
    console.warn(this.signupForm.value);
  }
}
