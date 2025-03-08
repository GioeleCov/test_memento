import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false,
})
export class LoginComponent {
  loginForm;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
