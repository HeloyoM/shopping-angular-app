import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UiService } from "../../services/ui.service";
import { IProduct } from "../../Models/IProduct";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice: number = 0;
  cartArray: IProduct[] = new Array();
  subscription: Subscription;
  showCart: boolean = false;
  
  constructor(public cartService: CartService, public uiService: UiService, private ordersService: OrdersService, private router: Router) {
    this.subscription = this.cartService.onAddingItemToCart().subscribe
      (
        item => {
          const productAllReadyExist = this.cartArray.filter((i) => i.name == item.name);
          if (productAllReadyExist.length > 0) {
            return;
          }
          this.cartArray.push(item);
          this.totalPrice = this.totalPrice + item.totalPrice;
        }
      )
    this.subscription = this.uiService.onShowCartClicked().subscribe
      (
        value => {
          this.showCart = value;
        }
      )
    this.subscription = this.cartService.onRenderCart().subscribe
      (
        response => {
          this.totalPrice = 0;
          this.cartArray = response;
        }
      )
  };

  ngOnInit(): void {
    const token = localStorage.getItem('data');
    if (token) {
      this.cartService.getUserProducts().subscribe
        (
          userProducts => {
            for (let i = 0; i < userProducts.length; i++) {
              this.cartArray.push(userProducts[i])
              this.totalPrice = this.totalPrice + this.cartArray[i].totalPrice
            }
          }
        )
    }
  };

  ngOnDistroy() {
    this.subscription.unsubscribe();
  };
  deleteCart() {
    this.cartService.removeAllItemsAndDeleteCart().subscribe();
    setTimeout(() => {
      this.cartArray = [];
      this.totalPrice = 0;
    }, 300)
  };

  removeItem(item: any) {
    const id = item.productId;
    this.cartService.removeItemFromCart(id).subscribe(
      () => (this.cartArray = this.cartArray.filter((i) => i.name !== item.name))
    )
    this.totalPrice = this.totalPrice - item.amount * item.price;
    setTimeout(() => {
      if (this.cartArray.length == 0) {
        this.cartService.deleteCart().subscribe();
      }
    }, 2000)
  };

  update(item: IProduct) {
    this.cartService.updateItemDetails(item).subscribe
      (
        response => {
          this.totalPrice = 0
          for (let i = 0; i < this.cartArray.length; i++) {
            this.totalPrice = this.totalPrice + this.cartArray[i].totalPrice;
          }
        }
      )
  };
  makeOrder(){
    const token = localStorage.getItem('data')
    if(!token){
      return
    }
    this.showCart = false;
    this.router.navigate(['/order'])
    this.ordersService.makeOrder(this.cartArray);
  }

}
