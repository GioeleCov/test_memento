import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user : string = '';
  password : string = '';
  remember : boolean = false;

  onSubmit() {
    return true;
  }
}
