import { Injectable, } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  showFile: boolean = false;

  categoryName: string;

  showMenu: boolean = false;
  showMenuSubject = new Subject<boolean>();

  showCart: boolean = false;
  showCartSubject = new Subject<boolean>();
  constructor() {

  }

  changeCategoryName(name: string) {
    return this.categoryName = name;
  };

  onShowMenuClicked(): Observable<boolean> {
    return this.showMenuSubject.asObservable();
  };
  menu() {
    this.showMenu = !this.showMenu;
    this.showMenuSubject.next(this.showMenu);
  };
  
  onShowCartClicked(): Observable<boolean> {
    return this.showCartSubject.asObservable();
  }
  cart() {
    this.showCart = !this.showCart;
    this.showCartSubject.next(this.showCart);
  };

  hidePanels() {
    this.showCart = false;
    this.showMenu = false;
  };

}
