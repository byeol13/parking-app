import { ParkingLot } from "./ParkingLot.model";

export interface ParkingPricing {
  parkingPricingId: number,
  parkingLotDTO: ParkingLot,
  dayOfWeek: number,
  morningHrCost: number,
  middayHrCost: number,
  eveningHrCost: number,
  allDayCost: number
}