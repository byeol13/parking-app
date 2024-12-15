import { Customer } from "./Customer.model";
import { ParkingLot } from "./ParkingLot.model";

export interface ParkingMonthlyPass {
  monthlyPassId: number;
  customerDTO: Customer,
  parkingLotDTO: ParkingLot,
  purchaseDate: Date,
  startDate: Date,
  durationInDays: number,
  cost: number
}