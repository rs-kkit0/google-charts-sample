import { Component, OnInit } from '@angular/core';
import { NUTORITIONS } from '../../mock-nutorition';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent implements OnInit {

  nutoritions = NUTORITIONS;

  syokuzai: string = null;
  gram: number = null;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.nutoritions.push({ name: this.syokuzai, gram: this.gram, calory: 0, protein: 0, fat: 0, carbohydrate: 0 });
    this.syokuzai = null;
    this.gram = null;
  }

}
