import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Medicine} from "../models/Medicine";
import {MedicineService} from "../services/medicine.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  subscription: Subscription;
  medicines: Observable<Medicine[]>;

  constructor(private medicineService: MedicineService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reloadData();
    this.subscription = this.medicineService.getListUpdateAlert().subscribe(
      (message) => {
        if (message) {
          this.reloadData();
        }
      }
    );
  }

  reloadData() {
    this.medicines = this.medicineService.getAllMedicine();
  }

  medicineDetails(id: string) {
    this.router.navigate([ 'details', id ], { relativeTo: this.route });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
