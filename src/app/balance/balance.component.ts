import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Web3Service } from '../shared/services/web3.service';
import { ContractService } from '../shared/services/contract.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
tokens = 0;
activeAccount = '';
  constructor(
    private matSnackBar: MatSnackBar,
    private contractService: ContractService,
    private web3Service: Web3Service) { }

  ngOnInit() {
    this.web3Service.activeAccount.subscribe(account => {
      this.activeAccount = account;
      this.getBalance(this.activeAccount);
    });
  }
  getBalance(addressGamer: string) {
    this.contractService.getJpContract().subscribe((deployed) => {
      const t = deployed.then((contract) => {
        contract.balanceOf(addressGamer).then((result) => {
          this.tokens = Number(result);

        });
      });
    });
  }
}
