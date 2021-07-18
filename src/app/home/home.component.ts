import { Component, OnInit } from '@angular/core';
import {MedicineService} from "../services/medicine.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchVal = "";
  showresult : boolean = false;
  medicines : any ;
  constructor(private medSearch: MedicineService) { }

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
     // console.log(data);
      this.medicines = data;
      this.medSearch.getMedicineByGenericName(this.medicines[0].genericName).subscribe((data: any) => {
        console.log(data);
        this.medicines = data;
        //console.log();
        this.showresult=true;
      });
    });
  }

}
