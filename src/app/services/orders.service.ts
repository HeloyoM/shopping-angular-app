import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orderArray = new Array();


  constructor(private http: HttpClient) { }

  makeOrder(orderDetails: any) {
    for (let i = 0; i < orderDetails.length; i++) {
      const name = orderDetails[i].name;
      const price = orderDetails[i].totalPrice;
      const amount = orderDetails[i].amount;
      const order = {
        name: name,
        price: price,
        amount: amount
      }
      this.orderArray.push(order);
    }
  };

  removeInvoicing() {
    this.orderArray = [];
  };

  sumbitOrder(order: any): Observable<any> {
    return this.http.post<any>("orders", order);
  };
  getOrderList() {
    return this.orderArray;
  };
  postOrder(order: any): Observable<any> {
    return this.http.post<any>("orders", { order });
  };

}
