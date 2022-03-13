import { CartService } from './../../services/cart.service';
import { IProduct } from '../../Models/IProduct';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: IProduct;

  //for building item object:
  amount: number = 1;
  totalPrice: number = 0;

  constructor(public cartService: CartService, private router: Router) {

  }

  ngOnInit(): void {
    const price: any = this.product.price;
    this.totalPrice = price;
  }

  addItem(product: IProduct) {
    const token = localStorage.getItem('data');
    if (token) {
      const item = {
        //for UI:
        name: product.name,
        price: product.price,
        image: product.image,
        //for DB:
        productId: product.productId,
        totalPrice: this.totalPrice,
        amount: this.amount,
      }
      this.cartService.addNewItem(item).subscribe();
    } else {
       this.router.navigate(["/login"]);
    }
  }

  min(product: IProduct) {
    if (this.amount != 1) {
      this.amount--;
      const price: any = product.price;
      this.totalPrice = this.totalPrice - price;
    }

  }
  max(product: IProduct) {
    this.amount++;
    const price: any = product.price;
    this.totalPrice = this.totalPrice + price;
  }
}
