import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { UserComponent } from '../user/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedin() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  login(user: User) {
    if (user.email !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard'])
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/sign-in'])
  }
}
