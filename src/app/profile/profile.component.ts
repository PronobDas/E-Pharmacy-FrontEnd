import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Medicine} from "../models/Medicine";
import {Params} from "@angular/router";
import {User} from "../models/User";
import {Order} from "../models/Order";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User
  orders : any
  constructor(private userService: UserService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.user = new User();
    this.userService.getUserEmail(sessionStorage.getItem('email')).subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
      console.log(this.user.id)
      this.cartService.getCartByUser(this.user.id).subscribe((data: any) => {
        this.orders = data;
        console.log(data);
      });
    });

  }

}
