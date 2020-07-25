import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Web3Service } from './web3.service';
import { debounceTime } from 'rxjs/operators';

declare let require: any;
const caravanArtifacts = require('./../../../../build/contracts/CaravanBoard.json');

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  accounts = [];
  jpContractSources$ = null;
  jpContract: Observable<any> = null;
  JackPotAbstraction = null;
  constructor(
    private web3Service: Web3Service,
  ) {
    this.JackPotAbstraction = this.setJpAbstraction();
    this.watchAccount();
  }
  getJpContract(): Observable<any> {
    if (this.JackPotAbstraction === null) {
      this.JackPotAbstraction = this.setJpAbstraction();
    }
    this.jpContractSources$ = new BehaviorSubject(this.JackPotAbstraction);
    this.jpContract = this.jpContractSources$.asObservable();
    return this.jpContract;
  }
  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
    });
  }

  checkFreeTickets() {
    this.getJpContract().subscribe((deployed) => {
      deployed.then((contract) =>
        contract.getTickets.call().then((tickets) => {
        })
      );
    });
  }
  getBoughtTickets(addressGamer: string) {
    this.getJpContract().subscribe((deployed) => {
      debounceTime(3000);
      deployed.then((contract) =>
        contract.getTickets.call().then((tickets) => {

          tickets.map((item, ind, arr) => {
            if (item.toLowerCase() === addressGamer.toLowerCase()) {
            }
          });
        })
      );
    });
  }

  setJpAbstraction() {
    return this.web3Service
      .artifactsToContract(caravanArtifacts)
      .then(async (JackPotAbstraction) => {
        return JackPotAbstraction.deployed();
       // return JackPotAbstraction.at('0xfd6c41cd602681d9788234e4e56ff4bee86e55a9');
      });
  }
}
