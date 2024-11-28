import { Customer } from "./Customer.model";
import { ParkingLot } from "./ParkingLot.model";

export interface ParkingMonthlyPass {
  id: number;
  customer_id: Customer,
  parking_lot_id: ParkingLot,
  purchase_date: Date,
  start_date: Date,
  duration_in_days: number,
  cost: number
}