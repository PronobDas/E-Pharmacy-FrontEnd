import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const baseUrl = 'http://localhost:8080/api/v1/orders';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  addMedicineToCart(orderId: any, data : any, unit : number) : Observable<any> {
    return this.http.put(`${baseUrl}/${orderId}/medicine/${unit}`,data);
  }

  getCart(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  getCartByUser(id: any): Observable<any> {
  return this.http.get(`${baseUrl}/user/${id}`);
}

}
