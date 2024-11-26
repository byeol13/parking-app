import { ParkingLot } from "./ParkingLot.model";

export interface ParkingPricing {
  id: number,
  parking_lot_id: ParkingLot,
  day_of_week: number,
  morning_hr_cost: number,
  midday_hr_cost: number,
  evening_hr_cost: number,
  all_day_cost: number
}