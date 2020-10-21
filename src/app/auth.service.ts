import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variable Declaration
  user$: Observable<firebase.User> ;
  
  constructor(private UserService:UserService,private afAuth:AngularFireAuth,public activateRoute:ActivatedRoute) { 
    
    this.user$ = afAuth.authState;
  }


  
  login(){
    let returnUrl = this.activateRoute.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    
  logOut() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
    .switchMap(user=> this.UserService.get(user.uid))
  }
}
