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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import { LogoutComponent } from './logout/logout.component';
import {AuthService} from "./services/auth.service";
import {AuthGaurdService} from "./services/authguard.service";
import { ProductEditComponent } from './product-edit/product-edit.component';
import {MedicineService} from "./services/medicine.service";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import {AdminauthService} from "./services/adminauth.service";
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { CartComponent } from './cart/cart.component';
import {CartService} from "./services/cart.service";
import { CheckoutComponent } from './checkout/checkout.component';

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
    LogoutComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    ProfileComponent,
    ProfileEditComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, canActivate: [AuthGaurdService]},
      {path: 'home', component: HomeComponent, canActivate: [AuthGaurdService]},
      {path: 'cart', component: CartComponent, canActivate: [AuthGaurdService]},
      {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGaurdService]},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: SigninComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGaurdService]},
      {path: 'profile/edit', component: ProfileEditComponent, canActivate: [AuthGaurdService]},
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AdminauthService]},
      {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AdminauthService]},
      {path: 'admin/products/edit/:id', component: ProductEditComponent, canActivate: [AdminauthService]},
      {path: 'admin/products/details/:id', component: ProductDetailsComponent, canActivate: [AdminauthService]}
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGaurdService,
    MedicineService,
    AdminauthService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
