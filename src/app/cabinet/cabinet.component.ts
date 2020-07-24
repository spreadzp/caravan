import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../shared/services/cabinet.service';
import { Cabinet } from '../shared/interfaces/cabinet.interface';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from '../shared/services/file.service';
import { UploaderComponent } from '../uploader/uploader.component';

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
  displayedColumns = ['name', 'resumeUrl', 'specialization', 'rating',
    'orders', 'uploadInfo'];
  constructor(private cabinetService: CabinetService, private dialog: MatDialog, private fstorage: FileService) { }
  ngOnInit(): void {
    this.cabinetService.cabinetsBoard.subscribe(cabinets => {
      this.cabinets = cabinets;
      this.showTable = true;
    });
    this.fstorage.urlUploadedFile.subscribe(newUrl => this.urlClientData = newUrl);
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

  }
}
