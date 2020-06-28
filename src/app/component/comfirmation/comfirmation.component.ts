import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.scss']
})
export class ComfirmationComponent implements OnInit {

  incomeTotal = 0;

  incomeList = [
    { caption: '給与<br>（夫・手取り)', amount: 35, calcTarget: true },
    { caption: '給与<br>（妻・手取り）', amount: 8.6, calcTarget: true },
    { caption: 'ボーナス<br>（夫・手取り）', amount: 100, calcTarget: false },
  ];

  expenseTotal = 0;

  expenseList = [
    { caption: '食費', amount: 7.3, calcTarget: true },
    { caption: '電気・ガス・水道', amount: 3.38, calcTarget: true },
    { caption: '交際費', amount: 0.4, calcTarget: true }
  ]

  savings = 0;

  savingsList = [
    { caption: '普通預金', amount: 163, calcTarget: true },
    { caption: '定期預金', amount: 161, calcTarget: true }
  ]

  investment = 0;

  investmentList = [];

  constructor() { }

  ngOnInit() {
    this.incomeList.forEach(e => {
      if (e.calcTarget) {
        this.incomeTotal += e.amount;
      }
    });
    this.expenseList.forEach(e => {
      if (e.calcTarget) {
        this.expenseTotal += e.amount;
      }
    });
    this.savingsList.forEach(e => {
      if (e.calcTarget) {
        this.savings += e.amount;
      }
    });
    this.investmentList.forEach(e => {
      if (e.calcTarget) {
        this.investment += e.amount;
      }
    });
  }

}
