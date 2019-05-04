import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
//import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  //  HttpModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
