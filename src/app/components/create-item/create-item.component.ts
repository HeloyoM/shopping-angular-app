import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from "../../Models/IProduct";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  showCreateForm: boolean = true;
  prodImg: string;
  prodName: string;
  prodPrice: number;
  categoryId: number;
  categories: string[] = ["grocery-products", "cheese-and-dairy", "meat-and-fish", "cleaners", "fruits-and-vegetables", "snacks-and-sweets"]

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void { }

  setCategory(cat: string) {
    if (cat == "grocery-products") {
      this.categoryId = 1
    }
    if (cat = "cheese-and-dairy") {
      this.categoryId = 2
    }
    if (cat = "meat-and-fish") {
      this.categoryId = 3
    }
    if (cat = "cleaners") {
      this.categoryId = 4
    }
    if (cat = "fruits-and-vegetables") {
      this.categoryId = 5
    }
    if (cat = "snacks-and-sweets") {
      this.categoryId = 6
    }
  };

  createProduct() {
    const product = {
      image: this.prodImg,
      name: this.prodName,
      price: this.prodPrice,
      categoryId: this.categoryId
    }
    this.productsService.createItem(product).subscribe();
  };

}
