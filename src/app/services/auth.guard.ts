import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.isLoggedin) {
      this.router.navigate(['sign-in'])
    }
    return true;
    /*  return this.authService.isLoggedin
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if(!isLoggedIn){
            this.router.navigate(['/sign-in']);
            return false;
          }
        return true;
        })
      );
    */
  }
  
}
