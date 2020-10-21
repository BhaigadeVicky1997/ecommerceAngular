import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eShop';
  constructor(public UserService:UserService,public auth:AuthService,public router:Router){
    this.auth.user$.subscribe((user)=>{
      if(user){
        this.UserService.save(user);
       let returnUrl = localStorage.getItem('returnUrl');
       this.router.navigateByUrl(returnUrl);
      }
    })
  }

}
