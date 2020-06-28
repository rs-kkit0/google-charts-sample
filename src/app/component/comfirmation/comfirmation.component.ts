import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.scss']
})
export class ComfirmationComponent implements OnInit {

  incomeTotal = 0;

  incomeList: { caption: string, amount: number }[] = [
    { caption: '給与（夫・手取り）', amount: 35 },
    { caption: '給与（妻・手取り）', amount: 8.6 },
    { caption: 'ボーナス（夫・手取り）', amount: 100 },
  ];

  expenseTotal = 0;

  expenseList = [
    { caption: '食費', amount: 7.3 },
    { caption: '電気・ガス・水道', amount: 3.38 },
    { caption: '交際費', amount: 0.4 }
  ]

  constructor() { }

  ngOnInit() {
    this.incomeTotal = 0;
    this.incomeList.forEach(e => {
      this.incomeTotal += e.amount;
    });
  }

}
