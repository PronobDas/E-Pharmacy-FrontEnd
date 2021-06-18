import { Component, OnInit } from '@angular/core';
import { User} from "../models/user";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user : User = new User;
  constructor() { }

  ngOnInit(): void {
  }

}
