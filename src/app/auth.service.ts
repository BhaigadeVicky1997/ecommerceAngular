import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AppUser } from './models/app-user';
import { UserServiceService } from './user-service.service';
import  'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  user$: Observable<firebase.User>;
  
  constructor(private afAuth:AngularFireAuth,private userService:UserServiceService) { 
    this.user$ = afAuth.authState;
  }

  login(){

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();  
  }

  get appUsers$():Observable<AppUser>{
    return this.user$
    .switchMap(user => this.userService.get(user.uid))
  }

}
