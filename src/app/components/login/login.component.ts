import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userType: string = '';

  constructor(private uiService: UiService, private usersService: UsersService) {

  }

  ngOnInit(): void { }

  hidePanels() {
    this.uiService.hidePanels();
  };

  username(event: any) {
    this.usersService.setUserLoginName(event.target.value);
  };

  password(event: any) {
    this.usersService.setPasswordLogin(event.target.value);
  };

  login() {
    this.usersService.login().subscribe
      (
        response => {
          const token = response
          if (response.errorType) {
            alert(response.errorType)
          } else {
            localStorage.setItem("data", token);
            this.usersService.getUser().subscribe
              (
                user => {
                  this.userType = user[0].role;
                  this.usersService.checkUserType(this.userType);
                }
              );
            setTimeout(
              () => {
                localStorage.clear();
              }, 1200000); //20 min
          }
        }
      );
  };

}
