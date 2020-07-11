import { Component, OnInit } from '@angular/core';
import { SimulationService } from 'src/app/service/simulation.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'ライフプランシミュレーション結果';
  type = 'LineChart';
  data = [
    [28, 200],
    [29, 250],
    [30, 300],
    [31, 350],
    [32, 300],
  ];
  columnNames = ["年齢", "資産運用あり", "資産運用なし"];
  options = {
    hAxis: {
      title: '年齢'
    },
    // vAxis: {
    //   title: '金融資産'
    // },
    width: 1200,
    height: 400
  };

  constructor(private service: SimulationService) { }

  ngOnInit() {
    this.data = this.service.simulate();
  }
}
