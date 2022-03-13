import { Injectable } from '@angular/core';
import { IProduct } from "../Models/IProduct";
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  showToast: boolean = false;
  renderCartSubject = new Subject<IProduct>();
  totalPrice: number = 0;
  itemSubject = new Subject<IProduct>();


  constructor(private http: HttpClient) { }

  addNewItem(item: IProduct): Observable<IProduct> {
    this.itemSubject.next(item);
    return this.http.post<IProduct>("cart", { item });
  };
  onAddingItemToCart(): Observable<IProduct> {
    return this.itemSubject.asObservable();
  };
  getUserProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`cart/products`);
  };
  removeItemFromCart(id: number): Observable<any> {
    return this.http.delete<any>(`cart/products/${id}`);
  };
  deleteCart(): Observable<any> {
    return this.http.delete<any>("cart");
  };
  removeAllItemsAndDeleteCart(): Observable<any> {
    return this.http.delete<any>("cart")
  };
  renderCart(cart: any) {
    return this.renderCartSubject.next(cart);
  }
  onRenderCart(): Observable<any> {
    return this.renderCartSubject.asObservable();
  }
  updateItemDetails(item: IProduct): Observable<any> {
    const id = item.productId;
    return this.http.put(`cart/products/${id}`, { item });
  }
}
