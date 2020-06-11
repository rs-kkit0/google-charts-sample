import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  title = 'How Much Pizza I Ate Last Night';
  type = 'PieChart';
  data = [
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2],
    ['Green Pepper', 2]
  ];
  columnNames = ['Topping', 'Slices'];
  options = {
    'width': 400,
    'height': 300
  };

  constructor() { }

  ngOnInit() {
  }

}
