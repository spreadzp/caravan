// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import * as EthCrypto from 'eth-crypto';
// @Injectable({
//   providedIn: 'root',
// })
// export class CypherService {
//   message: string | ArrayBuffer = '';
//   private encryptedSource$ = new BehaviorSubject(this.message);
//   encryptedMessage = this.encryptedSource$.asObservable();
//   cypherMessage = '';
//   private decryptedSource$ = new BehaviorSubject(this.cypherMessage);
//   decryptedMessage = this.decryptedSource$.asObservable();
//   secretMessage = 'My name is Satoshi Buterin';
//  alice = EthCrypto.createIdentity();

//   constructor() { }


//    async encrypted(secretMessage: string | ArrayBuffer ) {
//     console.log('this.alice.publicKey :>> ', this.alice.publicKey);
//     const encryptedResult = await EthCrypto.encryptWithPublicKey(
//       this.alice.publicKey, // encrypt with alice's publicKey
//       secretMessage.toString()
//     );
//     const encryptedString = EthCrypto.cipher.stringify(encryptedResult);
//     this.encryptedSource$.next(encryptedString);
//   }

//   async decrypted(encrypted) {
//     const encryptedObject = EthCrypto.cipher.parse(encrypted);
//     console.log('encryptedObject :>> ', encryptedObject);
//     console.log('this.alice.privateKey :>> ', this.alice.privateKey);
//     const decMessage = await EthCrypto.decryptWithPrivateKey(
//       this.alice.privateKey,
//       encryptedObject
//     );
//     console.log('decMessage :>> ', decMessage);
//     this.decryptedSource$.next(decMessage);
//   }
// }


