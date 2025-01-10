export class ParkingPricing {
  parkingPricingId?: number;
  parkingLotDTO: { parkingLotId: number};
  dayOfWeek: number;
  morningHrCost: number;
  middayHrCost: number;
  eveningHrCost: number;
  allDayCost: number;

  constructor(
    parkingLotDTO: { parkingLotId: number },
    dayOfWeek: number,
    morningHrCost: number,
    middayHrCost: number,
    eveningHrCost: number,
    allDayCost: number,
    parkingPricingId?: number
  ){
    this.parkingLotDTO = parkingLotDTO;
    this.dayOfWeek = dayOfWeek;
    this.morningHrCost = morningHrCost;
    this.middayHrCost = middayHrCost;
    this.eveningHrCost = eveningHrCost;
    this.allDayCost = allDayCost;
    if (parkingPricingId) this.parkingPricingId = parkingPricingId;
  }
}