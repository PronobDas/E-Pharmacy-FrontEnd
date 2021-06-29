import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : User = new User();
  password : string;
  name : string;

  constructor(private userService : UserService) { }

  authenticate(email: string, inputPassword: string) {
    this.userService.getUserEmail(email).subscribe((data: any) => {
        this.password = data.password;
        this.name = data.firstName + data.lastName;
        console.log(this.password);

      });
    if (this.password === inputPassword ) {
      sessionStorage.setItem('email', email)
      sessionStorage.setItem('name', this.name)
      return true;
    } else {
      return false;
    }
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
}


