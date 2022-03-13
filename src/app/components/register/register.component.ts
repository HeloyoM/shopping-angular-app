
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailInUse: boolean = false;
  goodUsername: boolean = false;
  badUsername: boolean = false;
  @ViewChild('emailRef', { static: false }) emailRef: ElementRef;
  @ViewChild("usernameRef", { static: false }) usernameRef: ElementRef;

  constructor(private usersService: UsersService, private router: Router) {

  }

  ngOnInit(): void { }

  checkUsername(event: any) {
    let username = event.target.value
    if (event.target.value.length == 4) {
      this.usersService.checkUsernameInput(username).subscribe
        (
          response => {
            if (response.errorType) {

              // alert(response.errorType);
              this.usernameRef.nativeElement.style.border = "1px solid red";
              this.goodUsername = false;
              this.badUsername = true;
            } else {
              this.badUsername = false;
              this.goodUsername = true;
              this.usernameRef.nativeElement.style.border = "1px solid black";
              this.usersService.setUsername(username);
            }
          }
        )
    } else if (event.target.value.length == 0) {
      this.goodUsername = false;
      this.badUsername = false;
    }
    this.usersService.setUsername(username);
  }
  setEmail(event: any) {

    let email = event.target.value;
    this.usersService.checkEmailInput(email).subscribe
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
    this.usersService.setEmail(event.target.value);

  };

  setPassword(event: any) {
    this.usersService.setPassword(event.target.value);
  };

  registerStepOne() {
    if (this.goodUsername && !this.emailInUse) {
      this.router.navigate(['register-step-two']);
    }
    this.router.navigate(['register-step-two']);
  };

};




