import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {fakeAsync} from "@angular/core/testing";

const baseUrl = 'http://localhost:8080/api/v1/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  email: string;
  dup : boolean;
  constructor(private http: HttpClient) { }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getUserEmail(email: any): Observable<any> {
    return this.http.get(`${baseUrl}/email/${email}`);
  }
  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  duplicateEmail (email: string) {
    this.getUserEmail(email).subscribe((data: any) => {
      this.email = data.email;
      this.dup = true;
      console.log("from dup"+ data);
      console.log("backend"+this.email);
      console.log("input"+email);
      if (this.email === email ) {
        console.log("duplicate email found");
        this.dup= false;
      } else {
        console.log("proceed");
        this.dup=true;
      }

    });

    return this.dup;
  }
}
