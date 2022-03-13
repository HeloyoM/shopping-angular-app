import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductsService } from './../../services/products.service';
import { UiService } from './../../services/ui.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  products: IProduct[] = [];
  subscription: Subscription;

  constructor(public productsService: ProductsService, public uiService: UiService, private router:Router) {
    this.subscription = this.productsService.onCategoryClicked().subscribe
      (
        response => {
          this.products = response;
        }
      )
  };

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe
      (
        response => {
          this.products = response;
        }
      )
  };
  ngOnDistroy() {
    this.subscription.unsubscribe();
  };
  hasRoute(route: string) {
    return this.router.url === route;
  };
}

