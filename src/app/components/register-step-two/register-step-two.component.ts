
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

// const mediaConstraints = {
//   audio: true,
//   video: { width: 350, height: 400 }
// };

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.css']
})

export class RegisterStepTwoComponent implements OnInit {

  cities: string[] = ["Jerusalem", "Tel-Aviv", "Hifa", "Rishon-Leziyon", "Petah-Tikva", "Ashdod", "Nettanya", "Beni-Brak", "Bee'r Sheva", "Holon"];
  constructor(private usersService: UsersService, private router: Router) {

  }
  ngOnInit(): void { }


  setFirstName(event: any) {
    this.usersService.setFirstName(event.target.value);
  };

  setLastName(event: any) {
    this.usersService.setLastName(event.target.value);
  };

  setCity(city: string) {
    this.usersService.setCity(city);
  };

  setAddress(event: any) {
    this.usersService.setAddress(event.target.value);
  };

  setPhone(event: any) {
    this.usersService.setPhone(event.target.value);
  }

  addNewUser() {
    this.usersService.addNewUser().subscribe();
    this.router.navigate(["home"]);
  };

}
