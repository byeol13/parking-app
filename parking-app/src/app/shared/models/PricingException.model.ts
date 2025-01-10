export class PricingException {
  pricingExceptionId?: number;
  parkingLotDTO: { parkingLotId: number };
  date: Date;
  morningHrCost: number;
  middayHrCost: number;
  eveningHrCost: number;
  allDayCost: number;

  constructor(
    parkingLotDTO: { parkingLotId: number },
    date: Date,
    morningHrCost: number,
    middayHrCost: number,
    eveningHrCost: number,
    allDayCost: number,
    pricingExceptionId?: number
  ){
    this.parkingLotDTO = parkingLotDTO;
    this.date = date;
    this.morningHrCost = morningHrCost;
    this.middayHrCost = middayHrCost;
    this.eveningHrCost = eveningHrCost;
    this.allDayCost = allDayCost;
    if (pricingExceptionId) this.pricingExceptionId = pricingExceptionId;
  }
}