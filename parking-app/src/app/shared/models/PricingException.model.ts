import { ParkingLot } from "./ParkingLot.model";

export interface PricingException {
  id: number,
  parking_lot_id: ParkingLot,
  date: Date,
  morning_hr_cost: number,
  midday_hr_cost: number,
  evening_hr_cost: number,
  all_day_cost: number
}