import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {
//   MatButtonModule,
//   MatCardModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatToolbarModule,
//   MatSidenavModule,
//   MatListModule,
//   MatIconModule,
//   MatTableModule,
//   MatSnackBarModule
// } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StatisticComponent } from './statistic/statistic.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { InfoComponent } from './info/info.component';
import { DoctorService } from './shared/services/doctor.service';
import { PatientService } from './shared/services/patient.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './shared/services/order.service';
import { Web3Service } from './shared/services/web3.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    StatisticComponent,
    DoctorsComponent,
    PatientsComponent,
    CabinetComponent,
    InfoComponent,
    OrdersComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
  ],
  providers: [Web3Service, DoctorService, PatientService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
