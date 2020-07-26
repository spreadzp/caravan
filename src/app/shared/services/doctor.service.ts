import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Doctor } from '../interfaces/doctor.interface';
// import { Gamer } from '../shared/gamer.interface';
@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  doctors: Doctor[] = [{
    name: 'John',
    resumeUrl: 'string',
    specialization: 'string',
    rating: 1,
    servicePrice: 50,
    orders: 'string'
  },
  {
    name: 'asdfdas',
    resumeUrl: 'url2',
    specialization: 'asfdaf4',
    rating: 3,
    servicePrice: 50,
    orders: 'string'
  },
  {
    name: 'string',
    resumeUrl: 'string',
    specialization: 'string',
    rating: 5,
    servicePrice: 50,
    orders: 'string'
  },
  ];
  private doctorsSource$ = new BehaviorSubject(this.doctors);
  doctorsBoard = this.doctorsSource$.asObservable();

  constructor() { }

  getStatisticGame(tickets: string[]) {
    // this.doctors = [];
    // tickets.filter((address, ind, arr) => {
    //   if (address !== '0x0000000000000000000000000000000000000000') {
    //     const gamer: Gamer = { addressGamer: address, numberTicket: ind };
    //     this.gamersTickets.push(gamer);
    //   }
    // });
    return this.doctorsSource$.next(this.doctors);
  }
}
