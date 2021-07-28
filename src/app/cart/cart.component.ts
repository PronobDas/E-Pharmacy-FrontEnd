import { Component, OnInit } from '@angular/core';
import {Medicine} from "../models/Medicine";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MedicineService} from "../services/medicine.service";
import {Order} from "../models/Order";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  medicineId: string;
  orderId: any;
  medicines : any ;
  order: Order;
  cartEmpty : boolean;
  username = sessionStorage.getItem('name')

  constructor(private route: ActivatedRoute,
              private router: Router,
              private medicineService: MedicineService,
              private cartService: CartService) {
  }
  ngOnInit(): void {
    this.order = new Order();
        this.orderId = localStorage.getItem('cartId');
        console.log(this.orderId)
        this.cartService.getCart(this.orderId).subscribe(
          Data => {
            this.order = Data;
            this.cartEmpty = true
            this.medicines = this.order.medicines
            console.log(this.medicines)
            console.log(this.order)
          }
        );

  }

  clearCart()
  {
    localStorage.removeItem('cartId')
    this.cartEmpty = false
  }



}
