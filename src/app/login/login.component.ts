//Npm Imports
import { Component, OnInit } from '@angular/core';

//Firebase Imports
import { AuthService } from '../auth.service';

//Local Imports

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private afauth:AuthService) { }

  ngOnInit(): void {
  }

  login(){
  this.afauth.login();
  }
}
