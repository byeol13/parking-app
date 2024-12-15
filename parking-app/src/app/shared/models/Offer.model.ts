import { ParkingLot } from "./ParkingLot.model";

export interface Offer {
  offersId: number,
  parkingLotDTO: ParkingLot,
  issuedOn: Date,
  validTill: Date,
  bookingDateFrom: Date,
  bookingDateTill: Date,
  discountInPercent: number,
  maxAmountOffer: number,
  discountInAmount: number,
  offerCode: string
}