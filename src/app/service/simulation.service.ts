import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor() { }

  simulate() {
    const res = [];
    const age = 29;
    const asset = 300;
    let managed = asset;
    let no_managed = asset;

    for (let i = age; i < 100; i++) {
      if (i <= 60) {
        managed *= 1.02;
        managed += 50;
        no_managed += 50;
      } else {
        managed *= 1.02;
        managed -= 70;
        no_managed -= 70;
      }
      if (managed >= 0 && no_managed >= 0) {
        res.push([i, managed, no_managed]);
      } else {
        break;
      }
    }
    return res;
  }
}
