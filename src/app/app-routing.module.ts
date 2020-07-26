import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { OrdersComponent } from './orders/orders.component';
import { ExchangeComponent } from './exchange/exchange.component';


const routes: Routes = [
  { path: '', component: DoctorsComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'cabinet', component: CabinetComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
