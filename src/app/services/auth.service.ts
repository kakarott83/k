import { Route } from '@angular/compiler/src/core';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { UserComponent } from '../user/user/user.component';
import firebase from 'firebase/compat';
import { storage } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedIn = new BehaviorSubject<boolean>(true);
  userData: any;
  currentUser: any;

  get isLoggedin() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    //console.log(user, 'isLoggedIn');
    //return (user != null && user.emailVerified !== false) ? true : false;
    return this.loggedIn.asObservable();
  }

  constructor(
    public router: Router,
    public afs: AngularFirestore,
    public afsAuth: AngularFireAuth,
    public ngZone: NgZone
    ) 
    { 
      this.afsAuth.authState.subscribe(user => {
        if(user) {
          this.userData = user;
          //console.log(user, 'AuthState');
          localStorage.setItem('user', JSON.stringify(this.userData));
          //JSON.parse(localStorage.getItem('user') || '{}');
          // console.log(JSON.parse(localStorage.getItem('user') || '{}'), 'AuthState2');
          this.loggedIn.next(true);
        } else {
          //localStorage.setItem('user', {});
          //JSON.parse(localStorage.getItem('user') || '{}');
          this.loggedIn.next(false);
        }
      })
    }


  /*login(user: User) {
    if (user.email !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/dashboard'])
    }
  }*/

  logout() {
    this.loggedIn.next(false);
    //this.router.navigate(['/sign-in'])
    return this.afsAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['sign-in']);
      })
  }

  SignUp(email: string, password: string) {
    const auth = getAuth();
    return this.afsAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //console.log(user);
        //E-Mail zur Verfication verschicken
        if (user) {
          user.sendEmailVerification();
        }
        this.loggedIn.next(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
        console.log(error);
        this.loggedIn.next(false);
      })
  }

  async SignIn(email: string, password: string) {
    const auth = getAuth();
    return await this.afsAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, 'LogIn');
        this.SetUserData(user);
        this.loggedIn.next(true);
        this.currentUser = user;
        this.router.navigate(['/dashboard']);
        //console.log(this.isLoggedin, 'LogIn State')
        //console.log(user, 'LogIn');
        /*this.ngZone.run(() => {
          //console.log(user, 'Router');
          this.router.navigate(['/dashboard']);
        })*/
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
        console.log(error);
        this.loggedIn.next(false);
      })
  }

  SetUserData(user: any) {
    //console.log(user, 'SetData');
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  async updateProfil(displayName: string) {
    const profile = {
      displayName: displayName
    }
    return (await this.afsAuth.currentUser)?.updateProfile(profile);
  }

  getCurrentUser() {
    if(this.currentUser) {
      return this.currentUser;
    }
    return false;
  }
}
