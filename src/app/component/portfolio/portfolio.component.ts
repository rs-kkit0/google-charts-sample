import { Component, OnInit } from '@angular/core';
import { GetFundInfoService } from 'src/app/service/get-fund-info.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  title;
  type;
  data;
  columnNames;
  options;

  info = new Array<any>();

  constructor(private service: GetFundInfoService) { }

  ngOnInit() {
    this.service.getFundInfo().subscribe(res => {
      res.forEach(e => this.info.push(e));
    });
    if (!this.title) {
      this.init();
    }
  }

  test() {
    this.data.push(['test', 1]);
    console.log('test works: ' + this.data);
  }

  init() {
    this.title = 'How Much Pizza I Ate Last Night';
    this.type = 'PieChart';
    this.data = [
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2],
      ['Green Pepper', 2]
    ];
    this.columnNames = ['Topping', 'Slices'];
    this.options = {
      'width': 400,
      'height': 300
    };
  }

}
