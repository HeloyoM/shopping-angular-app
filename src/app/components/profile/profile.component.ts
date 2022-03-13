import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('username', { static: false }) username: ElementRef;
  @ViewChild("email", { static: false }) email: ElementRef;
  @ViewChild("phone", { static: false }) phone: ElementRef;
  @ViewChild("addressInput", { static: false }) addressInput: ElementRef;
  @ViewChild("emailRef", { static: false }) emailRef: ElementRef;
  @ViewChild("usernameRef", { static: false }) usernameRef: ElementRef
  @ViewChild("phoneRef", { static: false }) phoneRef: ElementRef

  user = new Array();
  addLocation: boolean = false;
  locationDetails: boolean = true;
  locationForm: boolean = false;
  goodUsername: boolean = false;
  badUsername: boolean = false;
  emailInUse: boolean = false;

  cities: string[] = ["Jerusalem", "Tel-Aviv", "Hifa", "Rishon-Leziyon", "Petah-Tikva", "Ashdod", "Nettanya", "Beni-Brak", "Bee'r Sheva", "Holon"];

  city: string;
  address: string;
  usernameUpdate: string;
  emailUpdate: string;
  phoneUpdate: string;

  constructor(public usersService: UsersService) {

  }
  ngOnInit(): void {
    this.usersService.getUser().subscribe
      (
        user => {
          this.user = user;
        }
      );
    setTimeout(() => {
      this.usernameRef.nativeElement.value = this.user[0].username;
      this.emailRef.nativeElement.value = this.user[0].email;
      this.phoneRef.nativeElement.value = this.user[0].phone;
    }, 800);
  };

  removeLocationDetails() {
    this.addLocation = true;
    this.locationDetails = false;
  };
  add() {
    this.addLocation = false;
    this.locationForm = true;
  };
  setUsername(event: any) {
    let username = event.target.value
    if (event.target.value.length == 4) {
      this.usersService.checkUsernameInput(username).subscribe
        (
          response => {
            if (response.errorType) {

              this.badUsername = true;
              this.goodUsername = false;
            } else {
              this.badUsername = false;
              this.goodUsername = true;
            }
          }
        )
      this.usersService.setUsername(username);

    } else if (event.target.value.length == 0) {
      this.goodUsername = false;
      this.badUsername = false;
    }
  };

  setEmail(event: any) {
    this.emailUpdate = event.target.value;
    this.usersService.checkEmailInput(this.emailUpdate).subscribe
      (
        response => {
          if (response.errorType) {
            this.emailRef.nativeElement.value = '';
            this.emailRef.nativeElement.style.border = "1px solid red";
            this.emailInUse = true;
          } else {
            this.emailRef.nativeElement.style.border = "1px solid black";
            this.usersService.setEmail(event.target.value);
            this.emailInUse = false;
          }
        }
      )
  }
  setPhone(event: any) {
    this.phoneUpdate = event.target.value
  }
  setCity(city: string) {
    this.city = city
  };
  setAddress(event: any) {
    this.address = event.target.value;
  }
  saveLocation() {
    const user = {
      city: this.city,
      address: this.address
    }
    console.log(user)
    this.usersService.updateLocation(user).subscribe
      (
        response => {
          console.log(response)
          this.locationForm = false;
        }
      );
  };
  save() {
    const user = {
      username: this.usernameUpdate,
      email: this.emailUpdate,
      phone: this.phoneUpdate
    }
    this.usersService.updateDetails(user).subscribe
      (
        response => {
          console.log(response)
        }
      )
  }
}

