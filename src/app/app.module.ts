import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FileService } from './shared/services/file.service';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DropzoneDirective } from './shared/directives/dropzone.directive';

import { FireBaseConfig } from 'src/environments/firebase.config';
import { CabinetService } from './shared/services/cabinet.service';
import { ContractService } from './shared/services/contract.service';
import { ExchangeComponent } from './exchange/exchange.component';
import { BalanceComponent } from './balance/balance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    UploadTaskComponent,
    UploaderComponent,
    DropzoneDirective,
    ExchangeComponent,
    BalanceComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [Web3Service, DoctorService, PatientService, OrderService,
    FileService, CabinetService, ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
