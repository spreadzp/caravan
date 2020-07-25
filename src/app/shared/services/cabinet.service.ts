import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cabinet } from '../interfaces/cabinet.interface';
// import { Gamer } from '../shared/gamer.interface';
@Injectable({
  providedIn: 'root',
})
export class CabinetService {
  cabinets: Cabinet[] = [{
    name: 'John',
    resumeUrl: 'string',
    specialization: 'therapist',
    rating: 0,
    orders: ''
  }
  ];
  private cabinetsSource$ = new BehaviorSubject(this.cabinets);
  cabinetsBoard = this.cabinetsSource$.asObservable();

  constructor() { }

  getStatisticGame(tickets: string[]) {
    return this.cabinetsSource$.next(this.cabinets);
  }
}
