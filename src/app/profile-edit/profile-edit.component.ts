import { Component, OnInit } from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  user : User
  userID : string
  pass : string
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

  userForm = this.fb.group({
    firstName: [ '', Validators.required ],
    lastName: [ '', Validators.required ],
    gender: [ '', Validators.required ],
    location: [ '', Validators.required ],
    email: [ '', Validators.required ],
    phone: [ '', Validators.required ],
  });

  ngOnInit(): void {
    this.user = new User();
    this.userService.getUserEmail(sessionStorage.getItem('email')).subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
      this.userID = this.user.id;
      this.pass = this.user.password;
      this.userForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        gender: this.user.gender,
        location: this.user.location,
        email: this.user.email,
        phone: this.user.phone,

      });
    });
  }

  update() {
    this.user = this.userForm.value;
    this.user.password = this.pass;
    this.userService.updateUser(this.userID, this.user).subscribe(
      userData => {
        this.user = userData;
        // this.userService.sendListUpdateAlert('Updated');

      }, error => console.log(error)
    );
    this.router.navigate([ '/profile']);
  }

  onSubmit() {
    this.update();
  }

  cancelAdd() {
    this.router.navigate([ '/profile' ]);
  }

}
