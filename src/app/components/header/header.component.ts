
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UiService } from 'src/app/services/ui.service';
import { OrdersService } from './../../services/orders.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;
  subscription: Subscription;

  adminEntered: boolean = false;
  adminSubscription: Subscription;
  showLogoutBtn: boolean = false;

  constructor(private router: Router, private uiService: UiService, private usersService: UsersService, private ordersService: OrdersService) {
    this.subscription = this.uiService.onShowMenuClicked().subscribe
      (
        value => {
          this.showMenu = value
        }
      )
    this.adminSubscription = this.usersService.onLoginCheckUserType().subscribe
      (
        user => {
          if (user == "admin") {
            this.adminEntered = true;
            this.showLogoutBtn = true;
          }
          if (user == "user") {
            this.showLogoutBtn = true;
          }
        }
      )
    // this.subscription = this.usersService.onLogoutClicked().subscribe
    //   (
    //     value => {
    //       this.adminEntered = false;
    //     }
    //   )
  }

  ngOnInit(): void {
    const token = localStorage.getItem('data');
    if (token) {
      this.showLogoutBtn = true;
    }
  };

  ngOnDistroy() {
    this.subscription.unsubscribe();
    this.adminSubscription.unsubscribe();
  };

  menuBtn() {
    this.uiService.menu();
  };

  cartBtn() {
    this.uiService.cart();
  };
  hasRoute(route: string) {
    return this.router.url === route;
  };
  hidePanels() {
    this.uiService.hidePanels();
  };

  home() {
    this.router.navigate(["/home"]);
    this.uiService.changeCategoryName("all products");
  };

  logout() {
    const userType = '';
    localStorage.removeItem('data');
    this.showLogoutBtn = false;
    this.router.navigate(["/home"]);
    this.usersService.logout(userType);
  }
}
