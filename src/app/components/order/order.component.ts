import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from './../../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  sendPayment: boolean = false;
  showPaymentPart: boolean = false;
  showFile: boolean = false;

  orderArray: any[] = [];
  userSearch: string;
  name: string;
  cardNumber: number;
  expirationDate: string;
  cvc: number;
  totalPrice: number = 0;

  constructor(private ordersService: OrdersService, public cartService: CartService, private uiService: UiService) {

  }

  ngOnInit(): void {
    this.orderArray = this.ordersService.getOrderList();
    for (let i = 0; i < this.orderArray.length; i++) {
      this.totalPrice = this.totalPrice + this.orderArray[i].price;
    }
  }

  setName(event: any) {
    this.name = event.target.value
  };

  setCardNumber(event: any) {
    this.cardNumber = event.target.value
  };

  setExpirationDate(event: any) {
    this.expirationDate = event.target.value
  };

  setCvc(event: any) {
    this.cvc = event.target.value
  };

  deleteInvoicing() {
    this.ordersService.removeInvoicing();
    this.uiService.showFile = false;
  };

  pay() {
    this.showPaymentPart = !this.showPaymentPart;
  };

  getPayment() {
    const payment = {
      name: this.name,
      cardNumber: this.cardNumber,
      expirationDate: this.expirationDate,
      cvc: this.cvc
    }
    const order = {
      totalPrice: this.totalPrice,
    }
    this.ordersService.postOrder(order).subscribe();
    this.sendPayment = true;
    setTimeout(() => {
      this.sendPayment = false;
      this.uiService.showFile = true;
    }, 200);
    this.cartService.removeAllItemsAndDeleteCart().subscribe();
    setTimeout(() => {
      this.cartService.renderCart(this.orderArray);
      this.orderArray = [];
      this.totalPrice = 0;
    }, 15000)
  };

};


