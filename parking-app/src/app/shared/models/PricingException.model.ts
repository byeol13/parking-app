import { ParkingLot } from "./ParkingLot.model";

export interface PricingException {
  pricingExceptionId: number,
  parkingLotDTO: ParkingLot,
  date: Date,
  morningHrCost: number,
  middayHrCost: number,
  eveningHrCost: number,
  allDayCost: number
}