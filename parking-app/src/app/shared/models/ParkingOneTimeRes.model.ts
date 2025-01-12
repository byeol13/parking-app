export class ParkingOneTimeRes {
  oneTimeResId?: number;
  vehicleDTO: { vehicleId: number };
  parkingLotDTO: { parkingLotId: number };
  startTimestamp: Date;
  payForMinHr: string;
  bookingForHr: number;
  basicParkingCost: number;
  offerCode: string;
  netCost: number;
  isPaid: string;

  constructor(
    vehicleDTO: { vehicleId: number },
    parkingLotDTO: { parkingLotId: number },
    startTimestamp: Date,
    payForMinHr: string,
    bookingForHr: number,
    basicParkingCost: number,
    offerCode: string,
    netCost: number,
    isPaid: string,
    oneTimeResId?: number
  ){
    this.vehicleDTO = vehicleDTO;
    this.parkingLotDTO = parkingLotDTO;
    this.startTimestamp = startTimestamp;
    this.payForMinHr = payForMinHr;
    this.bookingForHr = bookingForHr;
    this.basicParkingCost = basicParkingCost;
    this.offerCode = offerCode;
    this.netCost = netCost;
    this.isPaid = isPaid;
    if (oneTimeResId) this.oneTimeResId = oneTimeResId;
  }
}