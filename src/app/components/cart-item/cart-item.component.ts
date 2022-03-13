import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {

  @Output() deleteItem: EventEmitter<IProduct> = new EventEmitter();
  @Output() updateItem: EventEmitter<IProduct> = new EventEmitter();
  @Input() item: IProduct;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void { }

  min(item: any) {
    if (item.amount != 1) {
      item.amount--;
      item.totalPrice = item.totalPrice - item.price;
      this.updateItemDetails(item);
    }
  };
  max(item: any) {
    item.amount++;
    item.totalPrice = item.totalPrice + item.price;
    this.updateItemDetails(item);
  };
  updateItemDetails(item: IProduct) {
    this.updateItem.emit(item);
  }
  deleteItemFromCart(item: IProduct) {
    this.deleteItem.emit(item);
  };
}
