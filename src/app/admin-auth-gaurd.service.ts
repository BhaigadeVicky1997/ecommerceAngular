import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserServiceService } from './user-service.service';

import  'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService implements CanActivate{
  constructor(private auth:AuthService,private userService:UserServiceService) { }
  

  canActivate(): Observable<boolean>{
 return this.auth.appUsers$
      .map(appUser => appUser.isAdmin);
  }
}
