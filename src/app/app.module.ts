//Npm Import's
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//firebase Import
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

//Local Imports
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from '../app/login/login.component';
import { AuthService } from './auth.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      
      {path:'products',component:ProductsComponent},

      {path:'my/orders',component:MyOrderComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]},      
      
      {path:'shopping-cart',component:ShoppingCartComponent},
      
      {path:'check-out',component:CheckOutComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]},
      
      {path:'order-success',component:OrderSuccessComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]},
      
      {path:'login',component:LoginComponent},
      
      {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]},

      
      {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGaurdService,AdminAuthGuardService]}
  ])
  ],
  providers: [AuthService,AuthGaurdService,UserService,AdminAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
