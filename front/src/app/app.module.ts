import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeuserviewComponent } from './views/homeuserview/homeuserview.component';
import { HomeadminviewComponent } from './views/homeadminview/homeadminview.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderclientComponent } from './shared/headerclient/headerclient.component';
import { HeaderadminComponent } from './shared/headeradmin/headeradmin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComicTableComponent } from '../app/components/comic-table/comic-table.component';
import { LoginComponent } from './components/login/login.component';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { HeaderloginComponent } from './shared/headerlogin/headerlogin.component';
import { RegisterComponent } from './examples/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CartComponent } from './examples/cart/cart.component';
=======
import { ShopingCartClientComponent } from './components/shoping-cart-client/shoping-cart-client.component';
import { RegisterAComponent } from './components/register-a/register-a.component';
>>>>>>> e1f62d007ab5f3bb5104097a1b8413de339b143c



@NgModule({
  declarations: [
    AppComponent,
    HomeuserviewComponent,
    HomeadminviewComponent,
    BannerComponent,
    FooterComponent,
    HeaderadminComponent,
    HeaderclientComponent,
    ComicTableComponent,
    LoginComponent,
    ComicDetailComponent,
    RegisterComponent,
    HeaderloginComponent,
<<<<<<< HEAD
    CartComponent,
=======
    ShopingCartClientComponent,
    RegisterAComponent,
>>>>>>> e1f62d007ab5f3bb5104097a1b8413de339b143c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
