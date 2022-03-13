import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  guestEntered: boolean = true;
  subscription: Subscription;
  
  constructor(private router: Router, private usersService: UsersService) {
    this.subscription = this.usersService.onLoginCheckUserType().subscribe
      (
        value => {
          if (value) {
            this.guestEntered = false
          }
          else {
            this.guestEntered = true;
          }
        }
      )
  }

  ngOnInit(): void {
    const token = localStorage.getItem('data');
    if (token) {
      this.guestEntered = false;
    }
  };

  hasRoute(route: string) {
    return this.router.url === route;
  };
  ngOnDistroy() {
    this.subscription.unsubscribe();
  };
}
