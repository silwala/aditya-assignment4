import { Component } from '@angular/core';
import {Tip} from "../tip";
import {TipDataService} from "../tip-data.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  title = "Calculated tip";
  public tip: Tip;

  public constructor(tipService: TipDataService) {
    this.tip = tipService.tip;
  }
}
