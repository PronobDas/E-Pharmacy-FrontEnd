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
    ProfileComponent
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
      { path: 'profile', component: ProfileComponent, canActivate:[AuthGaurdService]},
      { path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGaurdService]},
      { path: 'admin/products/new', component: ProductFormComponent ,canActivate:[AuthGaurdService]},
      { path: 'admin/products/edit/:id', component: ProductEditComponent ,canActivate:[AuthGaurdService]},
      { path: 'admin/products/details/:id', component: ProductDetailsComponent ,canActivate:[AuthGaurdService]}
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGaurdService,
    MedicineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
