export class Tip {
  costOfService: number;
  tipPercent: number;
  roundUp: boolean;
  get tipAmount(){
    let tipAmount = this.costOfService * this.tipPercent
    if(this.roundUp){
      tipAmount = Math.ceil(tipAmount);
    }
    return tipAmount
  }

  public constructor() {
    this.costOfService = 0;
    this.tipPercent = 0;
    this.roundUp = false;
  }
}
