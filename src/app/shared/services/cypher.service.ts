import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../interfaces/order.interface';
import * as EthCrypto from 'eth-crypto';
// import { Gamer } from '../shared/gamer.interface';
@Injectable({
  providedIn: 'root',
})
export class CypherService {
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
  secretMessage = 'My name is Satoshi Buterin';
  alice = EthCrypto.createIdentity();

  constructor() { }

  // getStatisticGame(tickets: string[]) {
  //   // this.orders = [];
  //   return this.ordersSource$.next(this.orders);
  // }


  // create identitiy with key-pairs and address


  async encrypted(secretMessage: string) {
    return await EthCrypto.encryptWithPublicKey(
      this.alice.publicKey, // encrypt with alice's publicKey
      secretMessage
    );
  }

  async decrypted(encrypted) {
    const decryptedMessage = await EthCrypto.decryptWithPrivateKey(
      this.alice.privateKey,
      encrypted
    );
    if (decryptedMessage === this.secretMessage) {
      console.log('success');
      return decryptedMessage;
    }

  }
}


