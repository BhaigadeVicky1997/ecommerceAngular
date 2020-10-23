//Npm Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';
import * as fromroot from '../app.reducer';
//Firebase Imports

//Local Imports

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //Variable Declaration
  isLoading:boolean = true;
  
  constructor(private auth:AuthService,private route :ActivatedRoute,private Store:Store<fromroot.State>) { }

  ngOnInit(): void {
  
  }

  login(){
    this.isLoading =false;
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.auth.login();
  }

  // onSubmit(username: string, password: string) {
  //   this.Store.dispatch(login({ username: username, password: password }));
  // }
}
