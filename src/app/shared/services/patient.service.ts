import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Patient } from '../interfaces/patient.interface';
// import { Gamer } from '../shared/gamer.interface';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patients: Patient[] = [{
    name: 'string',
    resumeUrl: 'string',
    specialization: 'string',
    rating: 1,
    orders: 'string'
  },
  {
    name: 'asdfdas',
    resumeUrl: 'url2',
    specialization: 'asfdaf4',
    rating: 3,
    orders: 'string'
  },
  {
    name: 'string',
    resumeUrl: 'string',
    specialization: 'string',
    rating: 5,
    orders: 'string'
  },
  ];
  private patientsSource$ = new BehaviorSubject(this.patients);
  patientsBoard = this.patientsSource$.asObservable();

  constructor() { }

  getStatisticGame(tickets: string[]) {
    // this.patients = [];
    // tickets.filter((address, ind, arr) => {
    //   if (address !== '0x0000000000000000000000000000000000000000') {
    //     const gamer: Gamer = { addressGamer: address, numberTicket: ind };
    //     this.gamersTickets.push(gamer);
    //   }
    // });
    return this.patientsSource$.next(this.patients);
  }
}
