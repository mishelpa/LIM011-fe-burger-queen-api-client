import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from '../app/pages/page-login/page-login.component';
import { PageHomeComponent } from '../app/pages/page-home/page-home.component';
import { PagesUsersComponent } from '../app/pages/pages-users/pages-users.component';
import { PageProductComponent } from '../app/pages/page-product/page-product.component';
import { PagesOrderComponent } from '../app/pages/pages-order/pages-order.component';
import { PageAllOrdersComponent } from '../app/pages/page-all-orders/page-all-orders.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: '', component: PageLoginComponent},
  { path: 'login', component: PageLoginComponent},
  { path: 'home', component: PageHomeComponent, canActivate: [AuthGuard]},
  { path: 'users', component: PagesUsersComponent, canActivate: [AuthGuard] },
  { path: 'products', component: PageProductComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: PagesOrderComponent, canActivate: [AuthGuard] },
  { path: 'allOrders', component: PageAllOrdersComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
