import { Injectable } from '@angular/core';
import { PANGOLINS } from './mock-pangolin-list';
import { Pangolin } from './pangolin';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class PangolinService {

  constructor() { }

  getPangolinList():Pangolin[] {
    return PANGOLINS;
  }

  getPangolinById(pangolinId:number): Pangolin | undefined {
    return PANGOLINS.find(pangolin => pangolin.id == pangolinId);
  }

  login():Pangolin | undefined {
    return PANGOLINS[0];
  }
}
