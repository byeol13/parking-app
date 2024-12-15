import { ParkingLot } from "./ParkingLot.model";
import { Vehicle } from "./Vehicle.model";

export interface ParkingOneTimeRes {
  oneTimeResId: number,
  vehicleDTO: Vehicle,
  vehicleNumber: string,
  parkingLotDTO: ParkingLot,
  startTimestamp: Date,
  payForMinHr: string,
  bookingForHr: number,
  basicParkingCost: number,
  offerCode: string,
  netCost: number,
  isPaid: string
}