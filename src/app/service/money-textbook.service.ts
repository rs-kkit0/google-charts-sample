import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyTextbookService {

  /** 収入 */
  private income: number;

  /** 生活費 */
  private livingCost: number;
  /** あそ費 */
  private entertainmentCost: number;
  /** こづかい */
  private pocketCost: number;
  /** 貯蓄 */
  private savingsCost: number;

  constructor() { }

  initCost(income: number) {
    this.income = income;

    this.livingCost = 0.4 * income;
    this.entertainmentCost = 0.2 * income;
    this.pocketCost = 0.2 * income;
    this.savingsCost = 0.2 * income;
  }

  calcHousingLoan(income: number, age: number) {

    const atamakin = 100;
    const kinri = 1.5;

    if (60 <= age) {
      '一括で購入しましょう'
      return;
    }

    const kariireKanouNensu = 60 - age;

    let housingCost = kariireKanouNensu * 0.2 * income + atamakin;


  }
}
