import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServiceComponent } from './component/mainContent/service/service.component';
import { ContactComponent } from './component/mainContent/contact/contact.component';
import { GalleryComponent } from './component/mainContent/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    ServiceComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
