import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../interfaces/order.interface';
// import { Gamer } from '../shared/gamer.interface';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Order[] = [{
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
  private ordersSource$ = new BehaviorSubject(this.orders);
  ordersBoard = this.ordersSource$.asObservable();

  constructor() { }

  getStatisticGame(tickets: string[]) {
    // this.orders = [];
    return this.ordersSource$.next(this.orders);
  }
}
