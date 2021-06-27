import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SigninComponent } from './signin/signin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import { LogoutComponent } from './logout/logout.component';
import {AuthService} from "./services/auth.service";
import {AuthGaurdService} from "./services/authguard.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    AdminProductsComponent,
    WelcomeComponent,
    NavbarComponent,
    SigninComponent,
    ProductFormComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate:[AuthGaurdService]},
      { path: 'home', component: HomeComponent, canActivate:[AuthGaurdService] },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'signup', component: SignupComponent},
      { path: 'signin', component: SigninComponent},
      { path: 'logout', component: LogoutComponent},
      { path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGaurdService]},
      { path: 'admin/products/new', component: ProductFormComponent ,canActivate:[AuthGaurdService]}
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
