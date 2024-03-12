import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { BrandComponent } from './components/brand/brand.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { BlankNavComponent } from './components/blank-nav/blank-nav.component';
import { AoutLayoutComponent } from './components/auth-layout/aout-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetilsComponent } from './components/detils/detils.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CutPipe } from './shared/pipes/cut.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    FooterComponent,
    CategoryComponent,
    BrandComponent,
    LoginComponent,
    RegisterComponent,
    AuthNavComponent,
    BlankNavComponent,
    AoutLayoutComponent,
    BlankLayoutComponent,
    NotfoundComponent,
    DetilsComponent,
    CutPipe,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
