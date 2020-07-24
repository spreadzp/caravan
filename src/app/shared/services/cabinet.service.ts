import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cabinet } from '../interfaces/cabinet.interface';
// import { Gamer } from '../shared/gamer.interface';
@Injectable({
  providedIn: 'root',
})
export class CabinetService {
  cabinets: Cabinet[] = [{
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
  private cabinetsSource$ = new BehaviorSubject(this.cabinets);
  cabinetsBoard = this.cabinetsSource$.asObservable();

  constructor() { }

  getStatisticGame(tickets: string[]) {
    // this.cabinets = [];
    // tickets.filter((address, ind, arr) => {
    //   if (address !== '0x0000000000000000000000000000000000000000') {
    //     const gamer: Gamer = { addressGamer: address, numberTicket: ind };
    //     this.gamersTickets.push(gamer);
    //   }
    // });
    return this.cabinetsSource$.next(this.cabinets);
  }
}
