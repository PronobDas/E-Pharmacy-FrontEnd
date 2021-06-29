import { Component, OnInit } from '@angular/core';
import {MedicineService} from "../services/medicine.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Medicine} from "../models/Medicine";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  medicineId: string;
  medicine: Medicine;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private medicineService: MedicineService) {
  }
  ngOnInit(): void {
    this.medicine = new Medicine();
    this.route.params.subscribe(
      (params: Params) => {
        this.medicineId = params['id'.toString()];
        this.medicineService.getMedicine(this.medicineId).subscribe(
          medicineData => {
            this.medicine = medicineData;
          }
        );
      }
    );
  }

  deleteMedicine(id: string) {
    this.medicineService.deleteMedicine(id).subscribe(
      data => {
        this.medicineService.sendListUpdateAlert('Deleted');
      },
      error => console.log(error)
    );
    this.router.navigate([ 'admin/products' ]);
  }

  updateMedicine(id: string) {
    this.router.navigate([ 'admin/products/edit', id ]);
  }

}
