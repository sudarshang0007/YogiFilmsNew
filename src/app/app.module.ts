import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
