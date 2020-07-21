import { Component, OnInit } from '@angular/core';
import { GetFundInfoService } from 'src/app/service/get-fund-info.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
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

  info = new Array<any>();

  constructor(private service: GetFundInfoService) { }

  ngOnInit() {
    this.service.getFundInfo().subscribe(res => {
      res.forEach(e => this.info.push(e));
    });
  }

}
