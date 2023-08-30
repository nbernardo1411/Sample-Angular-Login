import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Login2Component } from './login2/login2.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel'; // Import the CarouselModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Login2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CarouselModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
