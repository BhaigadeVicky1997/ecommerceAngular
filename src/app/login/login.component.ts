//Npm Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { login } from './login.actions';
//Firebase Imports

//Local Imports

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Store:Store,private auth:AuthService,private route :ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.auth.login();
  }

  // onSubmit(username: string, password: string) {
  //   this.Store.dispatch(login({ username: username, password: password }));
  // }
}
