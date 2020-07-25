import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../shared/services/cabinet.service';
import { Cabinet } from '../shared/interfaces/cabinet.interface';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from '../shared/services/file.service';
import { UploaderComponent } from '../uploader/uploader.component';
import { Web3Service } from '../shared/services/web3.service';
import { ContractService } from '../shared/services/contract.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  isMobile = false;
  showTable = false;
  cabinets: Cabinet[] = [];
  urlClientData = '';
  activeAccount = '';
  displayedColumns = ['name', 'resumeUrl', 'specialization', 'rating',
    'orders', 'uploadInfo'];
  constructor(private cabinetService: CabinetService, private dialog: MatDialog,
              private fstorage: FileService, private web3Service: Web3Service,
              private contractService: ContractService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cabinetService.cabinetsBoard.subscribe(cabinets => {
      this.cabinets = cabinets;
      this.showTable = true;
    });
    this.fstorage.urlUploadedFile.subscribe(newUrl => this.urlClientData = newUrl);
    this.web3Service.activeAccount.subscribe(account => {
      this.activeAccount = account;

    });
  }
  openDialog(cabinet: Cabinet) {
    const dialogRef = this.dialog.open(UploaderComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addInfo(cabinet);
      }
    });
  }
  addInfo(cabinet: Cabinet) {
    console.log('doctor :>> ', cabinet);
    console.log('this.urlClientData :>> ', this.urlClientData);
    this.contractService.getJpContract().subscribe(deployed => {
      console.log('deployed :>> ', deployed);
      const t = deployed.then((contract) => {
        console.log('contract :>> ', contract);
        console.log('this.activeAccount :>> ', this.activeAccount);
        // contract.registerDoctor(cabinet.name, this.urlClientData, cabinet.specialization, { from: this.activeAccount, gas: 900000 })
        contract.totalTokens.call({ from: this.activeAccount})
          .then((result) => { // set current address !!!
            console.log('result :>> ', result);
            if (result && result.logs && result.logs[0]) {
              this.contractService.checkFreeTickets();
              console.log('result.logs[0] :>> ', result.logs[0]);
              this.matSnackBar.open(`You bought ticket ${result.logs[0].args.LotteryNumber.words[0]}`, 'Undo', { duration: 3000 });
            } else {
              this.matSnackBar.open(`Some error!`, null, { duration: 3000 });
            }
          });
      }
    );
  });

  }
}
