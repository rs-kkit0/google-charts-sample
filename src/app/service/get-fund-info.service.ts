import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFundInfoService {

  info = [
    {
      name: '三菱ＵＦＪ国際－ｅＭＡＸＩＳ Ｓｌｉｍ バランス（８資産均等型）',
      code_10: 12.5,
      code_11: 12.5,
      code_12: 12.5,
      code_20: 12.5,
      code_21: 12.5,
      code_22: 12.5,
      code_30: 12.5,
      code_31: 12.5
    },
    {
      name: '三菱ＵＦＪ国際－ｅＭＡＸＩＳ　Ｓｌｉｍ　全世界株式（オール・カントリー）',
      code_10: 7.3,
      code_11: 81.2,
      code_12: 11.5
    }
  ]

  constructor() { }

  getFundInfo(): Observable<Array<any>> {
    return of(this.info);
  }
}
