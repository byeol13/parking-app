import { ParkingLot } from "./ParkingLot.model";
import { Vehicle } from "./Vehicle.model";

export interface ParkingOneTimeRes {
  id: number,
  customer_vehicle_id: Vehicle,
  vehicle_number: string,
  parking_lot_id: ParkingLot,
  start_timestamp: Date,
  pay_for_min_hr: string,
  booking_for_hr: number,
  basic_parking_cost: number,
  offer_code: string,
  net_cost: number,
  is_paid: string
}