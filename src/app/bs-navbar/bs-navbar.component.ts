import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {
  appUser:AppUser;
  appUserAd:AppUser;
  constructor(private afAuth: AuthService) {
    afAuth.appUser$.subscribe( (appUser) => {
      this.appUser = appUser;
       this.appUserAd = appUser;
    } )
   }
 

  ngOnInit(): void {
  
  }

  logOut(){
    console.log('click');
   this.afAuth.logOut; 
 }
}
