import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User = new User();
  submitted = false;
  userID: string;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    //console.log(this.user.email);
    //if(this.userService.duplicateEmail(this.user.email))
    //{
    //  console.log(this.user);
      this.userService
        .create(this.user).subscribe(data => {
          console.log(data);
          this.user = data;
          this.userID = this.user.id;
          this.router.navigate(['/signin'])
        },
        error => console.log(error));
    //}
  }

  onSubmit() {
    this.submitted = true;
  }

}
