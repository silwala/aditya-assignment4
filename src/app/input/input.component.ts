import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Tip} from "../tip";
import {Router} from "@angular/router";
import {TipDataService} from "../tip-data.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  public title: string = "Tip calculator";
  public form: FormGroup;
  public tip: Tip;
  private router: Router;

  public constructor(tipService: TipDataService, router: Router) {
    this.tip = tipService.tip;
    this.router = router;

    this.form = new FormGroup({
      costOfService: new FormControl('', Validators.required),
      tipPercent: new FormControl('', Validators.required),
      roundUp: new FormControl(false)
    });
  }

  public send(data: Tip) {
    this.tip.costOfService = data.costOfService;
    this.tip.tipPercent = data.tipPercent;
    this.tip.roundUp = data.roundUp;
    this.router.navigate(['output']).then(() => {
      console.log('showing the output data');
      console.log(data);
    });
  }
}
