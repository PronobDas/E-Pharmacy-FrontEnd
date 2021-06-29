import { Component, OnInit } from '@angular/core';
import {Medicine} from "../models/Medicine";
import {FormBuilder, Validators} from "@angular/forms";
import {MedicineService} from "../services/medicine.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  medicine: Medicine = new Medicine();
  medicineId: string;
  id : string;

  // Build Report Form
  medicineForm = this.fb.group({
    name: [ '', Validators.required ],
    genericName: [ '', Validators.required ],
    companyName: [ '', Validators.required ],
    weight: [ '', Validators.required ],
    unitPrice: [ '', Validators.required ],
    sensitivity: [ '', Validators.required ],
    imageURL: [ '', Validators.required ]
  });

  constructor(private medicineService: MedicineService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.medicineId = this.route.snapshot.params['id'.toString()];
    this.medicineService.getMedicine(this.medicineId).subscribe(
      medicineData => {
        this.medicine = medicineData;
        this.id = this.medicine.id;
        console.log(this.medicine);
        this.medicineForm.patchValue({
          name: this.medicine.name,
          genericName: this.medicine.genericName,
          companyName: this.medicine.companyName,
          weight: this.medicine.weight,
          unitPrice: this.medicine.unitPrice,
          sensitivity: this.medicine.sensitivity,
          imageURL: this.medicine.imageURL
        });
      }
    );

    console.log(this.id);
  }

  update() {
    this.medicine = this.medicineForm.value;
    this.medicineService.updateMedicine(this.medicineId, this.medicine).subscribe(
      medicineData => {
        this.medicine = medicineData;
        this.medicineService.sendListUpdateAlert('Updated');
        this.goToList();
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.update();
  }

  goToList() {
    this.router.navigate([ 'admin/products/details', this.id ]);
  }

  cancelAdd() {
    this.router.navigate([ 'admin/products' ]);
  }

}
