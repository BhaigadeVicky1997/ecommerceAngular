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
  constructor(public auth:AuthService) {
      auth.appUsers$.subscribe(appData =>{
        this.appUser = appData
      })
   }
  ngOnDestroy(): void {
  
  }

  ngOnInit(): void {
  }

  logOut(){
    
    location.reload();
    this.auth.logout();
  }
}
