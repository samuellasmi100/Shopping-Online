import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { HomeComponent } from '../components/home/home.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from'@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from '../components/cart/cart.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { CardsContainerComponent } from '../components/cards-container/cards-container.component';
import { ProductsComponent } from '../components/products/products.component';
import { LogOutComponent } from '../components/log-out/log-out.component';
import { AuthenticationInterceptor } from '../interceptors/authentication.interceptor';
import { ProductsSubTextPipe } from '../pipes/products-sub-text.pipe';
import { ProductsCategoryPipe } from '../pipes/products-category.pipe';
import { SearchComponent } from '../components/search/search.component';
import { OrderComponent } from '../components/order/order.component';
import { AddproductComponent } from '../components/admin/addproduct/addproduct.component';
import { EditproductComponent } from '../components/admin/editproduct/editproduct.component';
import { AdminProductsComponent } from '../components/admin/admin-products/admin-products.component';
import { FilterCategoryComponent } from '../components/filter-category/filter-category.component';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { ReceptionComponent } from '../components/reception/reception.component';
import { AboutComponent } from '../components/about/about.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    CustomerComponent,
    CardsContainerComponent,
    ProductsComponent,
    LogOutComponent,
    ProductsSubTextPipe,
    ProductsCategoryPipe,
    SearchComponent,
    OrderComponent,
    AddproductComponent,
    EditproductComponent,
    AdminProductsComponent,
    FilterCategoryComponent,
    HighlightPipe,
    CartItemComponent,
    ReceptionComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor,multi:true}
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
