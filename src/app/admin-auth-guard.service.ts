import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../app/auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(public AuthService:AuthService,public UserService:UserService) { }
  
  canActivate():Observable<any>{
   return this.AuthService.appUser$
   .map(addUser=> addUser.isAdmin)
  }
  
}
