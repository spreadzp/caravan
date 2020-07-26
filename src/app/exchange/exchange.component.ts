import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Web3Service } from '../shared/services/web3.service';
import { ContractService } from '../shared/services/contract.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  tokens = 0;
  amount = null;
  activeAccount = '';

  constructor(
    private matSnackBar: MatSnackBar,
    private contractService: ContractService,
    private web3Service: Web3Service) { }

  ngOnInit() {
    this.amount = new FormControl();
    this.web3Service.activeAccount.subscribe(account => this.activeAccount = account);
  }

  onAmountChange() {
    this.tokens = this.amount.value;
    console.log('this.tokens :>> ', this.tokens);
  }

  buyTokenSLT(tokens: number) {
    console.log('tokens :>> ', tokens);
    this.contractService.getJpContract().subscribe((deployed) => {
      const t = deployed.then((contract) => {
        console.log('@contract : >> ', contract);
        contract.buy({ from: this.activeAccount, gas: 600000, value: tokens * (10 ** 14) }).then((result) => {
          console.log('result :>> ', result);
          // this.jpService.checkFreeTickets();

          this.matSnackBar.open('buy SLT', 'Undo', { duration: 8000 });
        });
      });
    });
  }

  sellTokenSLT(tokens: number) {
    console.log('tokens :>> ', tokens);
    this.contractService.getJpContract().subscribe((deployed) => {
      const t = deployed.then((contract) => {
        console.log('@contract : >> ', contract);
        contract.sell( tokens , { from: this.activeAccount, gas: 600000}).then((result) => {
          console.log('result :>> ', result);
          // this.jpService.checkFreeTickets();

          this.matSnackBar.open('sell SLT', 'Undo', { duration: 8000 });
        });
      });
    });
  }
}
