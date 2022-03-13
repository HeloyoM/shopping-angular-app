import { UiService } from 'src/app/services/ui.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';
// import { fade } from "src/app/animations/animations";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    // fade
  ]
})
export class MenuComponent implements OnInit {

  links: string[] = ["grocery-products", "cheese-and-dairy", "meat-and-fish", "cleaners", "fruits-and-vegetables", "snacks-and-sweets"];
  showMenu: boolean = false;
  subscription: Subscription;



  

  constructor(private uiService: UiService, private productsService: ProductsService) {
    this.subscription = this.uiService.onShowMenuClicked().subscribe
      (
        value => {
          this.showMenu = value;
        }
      )
  }

  ngOnInit(): void { }

  categoryName(name: string, i: number) {
    this.uiService.changeCategoryName(name);
    i++; //start index from 1 like DB 
    this.productsService.getProductsByCategoryId(i).subscribe
      (
        response => {
          this.productsService.passProductsToSubject(response);
        }
      );
  };
  ngOnDistroy() {
    this.subscription.unsubscribe();
  };

}
