import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/services/doctor.service';
import { Doctor } from '../shared/interfaces/doctor.interface';

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
    'orders'];
  constructor(private doctorService: DoctorService) { }
  ngOnInit(): void {
    this.doctorService.doctorsBoard.subscribe(doctors => {
      this.doctors = doctors;
      this.showTable = true;
    });
  }

}
