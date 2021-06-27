import { Component, OnInit } from '@angular/core';
import { User} from "../models/User";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user : User = new User;
  username = ''
  password = ''
  invalidLogin = false
  constructor(private router: Router,
              private loginservice: AuthService) { }
  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}
