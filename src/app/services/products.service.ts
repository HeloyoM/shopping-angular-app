import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { IProduct } from './../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  categoryProductsSubject = new Subject<IProduct[]>();


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("products");
  };
  onCategoryClicked(): Observable<IProduct[]> {
    return this.categoryProductsSubject.asObservable();
  };
  passProductsToSubject(products: IProduct[]) {
    this.categoryProductsSubject.next(products);
  };
  getProductsByCategoryId(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`products/${id}`);
  };
  createItem(product: any): Observable<any> {
    return this.http.post<IProduct>("products", { product });
  }
}