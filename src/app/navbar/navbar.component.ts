import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin : boolean =false;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.admin = this.authService.isUserAdmin();
  }
  user = sessionStorage.getItem('name')

}
