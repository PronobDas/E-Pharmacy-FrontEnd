import { Component, OnInit } from '@angular/core';
import {Medicine} from "../models/Medicine";
import {FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MedicineService} from "../services/medicine.service";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  medicine = new Medicine();
  medicineId: string;
  submitted = false;

  // Build Report Form
  medicineForm = this.fb.group({
    name: [ '', Validators.required ],
    genericName: [ '', Validators.required ],
    companyName: [ '', Validators.required ],
    weight: [ '', Validators.required ],
    unitPrice: [ '', Validators.required ],
    sensitivity: [ '', Validators.required ],
    imageURL: [''],
  });

  constructor(private medicineService: MedicineService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  save() {
    this.medicine = this.medicineForm.value;
    this.medicineService.createMedicine(this.medicine).subscribe(
      medicineData => {
        this.medicine = medicineData;
        console.log(this.medicine);
        this.medicineId = this.medicine.id;
        this.medicine = new Medicine();
        this.medicineService.sendListUpdateAlert('Added');
        this.goToList();
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate([ 'admin/products' ]);
  }

  goToList() {
    this.router.navigate([ 'admin/products' ]);
  }

  cancelAdd() {
    this.router.navigate([ '' ]);
  }
}
