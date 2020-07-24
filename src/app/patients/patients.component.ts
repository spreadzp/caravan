import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/services/patient.service';
import { Patient } from '../shared/interfaces/patient.interface';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  isMobile = false;
  showTable = false;
  patients: Patient[] = [];
  displayedColumns = ['name', 'resumeUrl', 'specialization', 'rating',
    'orders'];
  constructor(private patientService: PatientService) { }
  ngOnInit(): void {
    this.patientService.patientsBoard.subscribe(patients => {
      this.patients = patients;
      this.showTable = true;
    });
  }

}
