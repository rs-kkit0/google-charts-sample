import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.scss']
})
export class DiagnosisComponent implements OnInit {

  name: string;
  gender: string;
  income: number;
  savings: number;
  costOfLiving: number;

  constructor() { }

  ngOnInit() {
    this.name = '佐藤太郎'
    this.gender = '1';
    this.income = 400;
    this.savings = 200;
    this.costOfLiving = 20;
  }

}
