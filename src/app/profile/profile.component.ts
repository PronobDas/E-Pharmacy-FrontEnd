import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Medicine} from "../models/Medicine";
import {Params} from "@angular/router";
import {User} from "../models/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.userService.getUserEmail(sessionStorage.getItem('email')).subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
    });
  }

}
