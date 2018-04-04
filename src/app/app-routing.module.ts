import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ServiceComponent } from './component/mainContent/service/service.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service', component: ServiceComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})



export class AppRoutingModule {
}