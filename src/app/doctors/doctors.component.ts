import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { DoctorService } from '../shared/services/doctor.service';
import { Doctor } from '../shared/interfaces/doctor.interface';
import { UploaderComponent } from './../uploader/uploader.component';
import { FileService } from '../shared/services/file.service';
import { Web3Service } from '../shared/services/web3.service';
import { ContractService } from '../shared/services/contract.service';

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
  activeAccount = '';
  constructor(private doctorService: DoctorService, private dialog: MatDialog,
              private fstorage: FileService, private web3Service: Web3Service, private contractService: ContractService) { }
  ngOnInit(): void {
    this.doctorService.doctorsBoard.subscribe(doctors => {
      this.doctors = doctors;
      this.showTable = true;
    });
    this.fstorage.urlUploadedFile.subscribe(newUrl => this.urlClientData = newUrl);
    this.web3Service.activeAccount.subscribe(account => {
      this.activeAccount = account;

    });
    this.contractService.getJpContract().subscribe(deployed => {
      console.log('deployed :>> ', deployed);
      const t = deployed.then((contract) => {
        console.log('contract :>> ', contract);
        console.log('this.activeAccount :>> ', this.activeAccount);
        contract.getDoctors({ from: this.activeAccount, gas: 900000 })
          // contract.totalTokens.call({ from: this.activeAccount})
          .then((result) => { // set current address !!!
            console.log('result :>> ', result);
            this.doctors = [...result];
          });
      }
      );
    });
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
