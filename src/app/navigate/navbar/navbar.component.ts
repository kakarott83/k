import { Component, ChangeDetectorRef,OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  showFiller = false;

  //collapsedNav: boolean = true;
  //mobileQuery: MediaQueryList;
  isLoggedIn$!: Observable<boolean>;
  isLoggedIn!: Observable<boolean>;


  //private _mobileQueryListener: () => void;

  //shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(
    //changeDetectorRef: ChangeDetectorRef, 
    //media: MediaMatcher,
    private authService: AuthService,
    private router: Router) {
    //this.mobileQuery = media.matchMedia('(max-width: 600px)');
    //this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  ngOnInit(): void {
    // this.isLoggedIn$ = this.authService.isLoggedin;
    this.isLoggedIn$ = new BehaviorSubject<boolean>(true);
    this.isLoggedIn = this.authService.isLoggedin;
  }

  ngOnDestroy(): void {
    //this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  signOut() {
    this.authService.logout();
  }

}
