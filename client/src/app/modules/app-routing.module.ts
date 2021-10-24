import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from '../components/admin/addproduct/addproduct.component';
import { AdminProductsComponent } from '../components/admin/admin-products/admin-products.component';
import { EditproductComponent } from '../components/admin/editproduct/editproduct.component';
import { CardsContainerComponent } from '../components/cards-container/cards-container.component';
import { CartComponent } from '../components/cart/cart.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { HomeComponent } from '../components/home/home.component';
import { LogOutComponent } from '../components/log-out/log-out.component';
import { LoginComponent } from '../components/login/login.component';
import { OrderComponent } from '../components/order/order.component';
import { RegisterComponent } from '../components/register/register.component';
import { ReceptionComponent } from '../components/reception/reception.component'
import { ProductsComponent } from '../components/products/products.component';
import { AboutComponent } from '../components/about/about.component';
import { CustomerGuard } from '../guards/customer.guard';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"customer",component:CustomerComponent,canActivate:[CustomerGuard]},
  {path:"cart",component:CartComponent,canActivate:[CustomerGuard]},
  {path:"logout",component:LogOutComponent,canActivate:[CustomerGuard]},
  {path:"card",component:CardsContainerComponent,canActivate:[CustomerGuard]},
  {path:"order",component:OrderComponent,canActivate:[CustomerGuard]},
  {path:"products",component:CardsContainerComponent,canActivate:[CustomerGuard]},
  {path:"reception",component:ReceptionComponent,canActivate:[CustomerGuard]},
  {path:"about",component:AboutComponent,canActivate:[CustomerGuard]},
  {path:"admin/products",component:AdminProductsComponent,canActivate:[AdminGuard]},
  {path:"admin/addproduct",component:AddproductComponent,canActivate:[AdminGuard]},
  {path:"admin/edit/:id",component:EditproductComponent,canActivate:[AdminGuard]},
  {path:"",redirectTo:"home",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
