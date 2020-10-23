//Npm Import's
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



//firebase Import
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//NGRX Store Import
import {StoreModule} from '@ngrx/store';

//Local Imports
import {reducers} from '../app/app.reducer';
import { environment } from '../environments/environment';
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
import { AuthGuardServiceService } from './auth-guard-service.service';
import { UserServiceService } from './user-service.service';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoriesService } from './categories.service';
import { ProductService } from './product-service';


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
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },

      { path: 'products', component: ProductsComponent },

      { path: 'my/orders', component: MyOrderComponent ,canActivate:[AuthGuardServiceService]},

      { path: 'shopping-cart', component: ShoppingCartComponent,canActivate:[AuthGuardServiceService] },

      { path: 'check-out', component: CheckOutComponent ,canActivate:[AuthGuardServiceService]},

      { path: 'order-success', component: OrderSuccessComponent,canActivate:[AuthGuardServiceService] },

      { path: 'login', component: LoginComponent },

      { path: 'admin/products', component: AdminProductsComponent ,canActivate:[AuthGuardServiceService,AdminAuthGaurdService]},

      { path: 'admin/product/new', component: ProductFormComponent ,canActivate:[AuthGuardServiceService,AdminAuthGaurdService]},

      { path: 'admin/product/:id', component: ProductFormComponent ,canActivate:[AuthGuardServiceService,AdminAuthGaurdService]},

      { path: 'admin/orders', component: AdminOrdersComponent ,canActivate:[AuthGuardServiceService,AdminAuthGaurdService]}
    ])
  ],
  providers: [ProductService,AuthService,AuthGuardServiceService,UserServiceService,AdminAuthGaurdService,CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
