import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AoutLayoutComponent } from './components/auth-layout/aout-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BlankNavComponent } from './components/blank-nav/blank-nav.component';
import { HomeComponent } from './components/home/home.component';
import { BrandComponent } from './components/brand/brand.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetilsComponent } from './components/detils/detils.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';

const routes: Routes =
[
  {path:"",component:AoutLayoutComponent,children:[
    {path:'' ,redirectTo:'login',pathMatch:'full'},
    {path:"login",title:'Log In',component:LoginComponent},
    {path:"register",title:'Regester',component:RegisterComponent},
  ]},
  {path:"",component:BlankLayoutComponent,
  canActivate:[authGuard],
  children:[
    {path:'',redirectTo:"home",pathMatch:"full"},
    {path:'blank-nav',component:BlankNavComponent},
    {path:'home',title:'Home',component:HomeComponent},
    {path:'checkout/:id',title:'Checkout',component:CheckoutComponent},
    {path:'detils/:id',component:DetilsComponent},
    {path:'brand',title:'Brand',component:BrandComponent},
    {path:'allorders',title:'All Orders',component:AllordersComponent},
    {path:'cart',title:'Cart',component:CartComponent},
    {path:'categoty',title:'Category',component:CategoryComponent},
    {path:'product',title:'Prodact',component:ProductComponent},
  ]},
  {path:"footer",component:FooterComponent},
  {path:'**',title:'404',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
