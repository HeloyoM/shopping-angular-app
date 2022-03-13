import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterStepTwoComponent } from './components/register-step-two/register-step-two.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SearchPipePipe } from './pips/search-pipe.pipe';
import { OrderComponent } from './components/order/order.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { DownloadFileComponent } from './components/download-file/download-file.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AuthenticationInterceptor} from "./interceptors/AuthenticationInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    RegisterStepTwoComponent,
    CardsContainerComponent,
    CartComponent,
    CartItemComponent,
    SearchPipePipe,
    OrderComponent,
    JumbotronComponent,
    CreateItemComponent,
    DownloadFileComponent,
    ProfileComponent,
  ],
  imports: [
    MDBBootstrapModulesPro.forRoot(),
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatInputModule,
    RouterModule.forRoot([
      {
        path: "home", component: CardsContainerComponent,
        children: [
          { path: "grocery-products", component: CardsContainerComponent },
          { path: "cheese-and-dairy", component: CardsContainerComponent },
          { path: "meat-and-fish", component: CardsContainerComponent },
          { path: "cleaners", component: CardsContainerComponent },
          { path: "fruits-and-vegetables", component: CardsContainerComponent },
          { path: "snacks-and-sweets", component: CardsContainerComponent }]
      },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "register-step-two", component: RegisterStepTwoComponent },
      { path: "order", component: OrderComponent },
      { path: "create-item", component: CreateItemComponent },
      { path: "profile", component: ProfileComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]),
  ],
  providers: [MDBSpinningPreloader,
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
