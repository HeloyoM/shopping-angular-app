import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  userTypeSubject = new Subject<any>();
  customerEntered: boolean = true;

  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  phone: number;

  userLoginName: string;
  passwordLogin: string;

  constructor(private http: HttpClient) {

  }


  setUsername(name: string) {
    this.username = name;
  };

  setEmail(email: string) {
    this.email = email;
  };

  setPassword(password: string) {
    this.password = password;
  };

  setFirstName(firstName: string) {
    this.firstName = firstName;
  };

  setLastName(lastName: string) {
    this.lastName = lastName;
  };

  setCity(city: string) {
    this.city = city;
  };

  setAddress(address: string) {
    this.address = address;
  };
  setPhone(phone: number) {
    this.phone = phone;
  };

  setUserLoginName(username: string) {
    this.userLoginName = username;
  };

  setPasswordLogin(password: any) {
    this.passwordLogin = password;
  };
  addNewUser(): Observable<object> {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      city: this.city,
      address: this.address,
      phone: this.phone
    }
    return this.http.post("users", user);
  };


  checkUserType(userType: string) {
    return this.userTypeSubject.next(userType);
  }
  onLoginCheckUserType(): Observable<any> {
    return this.userTypeSubject.asObservable();
  }
  logout(userType: string) {
    return this.userTypeSubject.next(userType);
  }
  onLogoutClicked(): Observable<any> {
    return this.userTypeSubject.asObservable();
  };

  checkUsernameInput(username: string): Observable<any> {
    return this.http.post(`users/check`, { username });
  };
  checkEmailInput(email: string): Observable<any> {
    return this.http.post<string>(`users/email`, { email });
  };

  login(): Observable<any> {
    const userLoginData = {
      username: this.userLoginName,
      password: this.passwordLogin
    };
    return this.http.post<any>(`users/login`, userLoginData);
  };

  getUser(): Observable<any> {
    return this.http.get<any>(`users/user`);
  };
  updateLocation(user: any): Observable<any> {
    return this.http.put<any>("users", { user });
  }
  updateDetails(user: any): Observable<any> {
    return this.http.put<any>(`users/user`, { user })
  }
}

