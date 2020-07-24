import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { DoctorService } from '../shared/services/doctor.service';
import { Doctor } from '../shared/interfaces/doctor.interface';
import { UploaderComponent } from './../uploader/uploader.component';
import { FileService } from '../shared/services/file.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  isMobile = false;
  showTable = false;
  doctors: Doctor[] = [];
  displayedColumns = ['name', 'resumeUrl', 'specialization', 'rating',
    'orders', 'info', 'order'];
  urlClientData = '';
  constructor(private doctorService: DoctorService, private dialog: MatDialog, private fstorage: FileService) { }
  ngOnInit(): void {
    this.doctorService.doctorsBoard.subscribe(doctors => {
      this.doctors = doctors;
      this.showTable = true;
    });
    this.fstorage.urlUploadedFile.subscribe(newUrl => this.urlClientData = newUrl);
  }
  openDialog(doctor: Doctor) {
    const dialogRef = this.dialog.open(UploaderComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.makeOrder(doctor);
      }
    });
  }
  makeOrder(doctor: Doctor) {
console.log('doctor :>> ', doctor);
console.log('this.urlClientData :>> ', this.urlClientData);

  }

}
