import {Component, inject, OnInit} from '@angular/core';
import {MedicineService} from "../services/medicine.service";
import {Order} from "../models/Order";
import {CartService} from "../services/cart.service";
import {Medicine} from "../models/Medicine";
import {async, waitForAsync} from "@angular/core/testing";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  order = new Order();
  cartId: string;
  searchVal = "";
  showresult : boolean = false;
  medicines : any ;
  constructor(private medSearch: MedicineService,
              private cartService: CartService)
  { }

  ngOnInit(): void {
  }
  getSearchVal(val: string)
  {
    this.searchVal = val;
    console.warn(this.searchVal);
  }
  getResult()
  {
    this.medSearch.getMedicineByName(this.searchVal).subscribe((data: any) => {
     console.log(data);
      this.medicines = data;
      this.medSearch.getMedicineByGenericName(this.medicines[0].genericName).subscribe((data: any) => {
        console.log(data);
        this.medicines = data;
        //console.log();
        this.showresult=true;
      });
    });
  }

  addToCart(medicineName : string){
    let medicineToAdd = new Medicine()

   //   medicineToAdd = this.getMedObj(medicineName)

      let cartId = localStorage.getItem('cartId')
      if (cartId) {
        this.medSearch.getMedicineByName(medicineName).subscribe((data:any) => {
          medicineToAdd = data[0];

          console.log(medicineToAdd)
          this.cartService.addMedicineToCart(cartId, medicineToAdd, 1).subscribe(
            data => {
              this.order = data;
            }, error => console.log(error)
          );
        });


      } else {
        this.medSearch.getMedicineByName(medicineName).subscribe((data:any) => {
          medicineToAdd = data[0];

          console.log(medicineToAdd)
        });
        this.order.location = 'hoga'
        this.order.phone = '12121212121'
        this.order.medicines = this.order.medicines || []
        this.order.units = this.order.units || []
        this.cartService.create(this.order).subscribe(
          cartData => {
            this.order = cartData;
            this.cartId = this.order.id;

            console.log(this.order);

            this.cartService.addMedicineToCart(this.order.id, medicineToAdd, 1).subscribe(
              data => {
                this.order = data;
              }, error => console.log(error)
            );


            localStorage.setItem('cartId', this.cartId)
          }, error => console.log(error)
        );
      }

  }
}


