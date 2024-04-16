import { Injectable } from '@angular/core';
import {Tip} from "./tip";

@Injectable({
  providedIn: 'root'
})
export class TipDataService {
  tip: Tip = new Tip();
}
