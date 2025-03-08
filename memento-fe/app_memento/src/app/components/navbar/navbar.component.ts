import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  hasUserCookie(): boolean {
    return false;
    // return document.cookie
    //   .split(';')
    //   .some(cookie => {
    //     const [name, ...rest] = cookie.trim().split('=');
    //     return name === 'user' && rest.join('=').length > 0;
    //   });
  }
}
