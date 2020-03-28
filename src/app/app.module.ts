import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PagesUsersComponent } from './pages/pages-users/pages-users.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { AuthInterceptorService } from './services/auth-interceptor/auth-interceptor.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './components/nav/nav.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { PageProductComponent } from './pages/page-product/page-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { PagesOrderComponent } from './pages/pages-order/pages-order.component';
import { OrdersProductsComponent } from './components/orders-products/orders-products.component';
import { OrderFoodComponent } from './components/order-food/order-food.component';
import { BillOrderComponent } from './components/bill-order/bill-order.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { PageAllOrdersComponent } from './pages/page-all-orders/page-all-orders.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageLoginComponent,
    PagesUsersComponent,
    RegisterUsersComponent,
    ListUsersComponent,
    PageHomeComponent,
    NavComponent,
    UpdateUsersComponent,
    ListProductsComponent,
    PageProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    PagesOrderComponent,
    OrdersProductsComponent,
    OrderFoodComponent,
    BillOrderComponent,
    ListOrdersComponent,
    PageAllOrdersComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
