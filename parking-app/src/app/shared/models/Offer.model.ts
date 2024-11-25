import { ParkingLot } from "./ParkingLot.model";

export interface Offer {
  id: number,
  parking_lot_id: ParkingLot,
  issued_on: Date,
  valid_till: Date,
  booking_date_from: Date,
  booking_date_till: Date,
  discount_in_percent: number,
  max_amount_offer: number,
  discount_in_amount: number,
  offer_code: string
}