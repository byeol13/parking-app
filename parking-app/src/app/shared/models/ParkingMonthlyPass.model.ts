export class ParkingMonthlyPass {
  monthlyPassId?: number;
  customerDTO: { customerId: number };
  parkingLotDTO: { parkingLotId: number };
  purchaseDate: Date;
  startDate: Date;
  durationInDays: number;
  cost: number;

  constructor(
    customerDTO: { customerId: number },
    parkingLotDTO: { parkingLotId: number },
    purchaseDate: Date,
    startDate: Date,
    durationInDays: number,
    cost: number,
    monthlyPassId?: number
  ){
    this.customerDTO = customerDTO;
    this.parkingLotDTO = parkingLotDTO;
    this.purchaseDate = purchaseDate;
    this.startDate = startDate;
    this.durationInDays = durationInDays;
    this.cost = cost;
    if (monthlyPassId) this.monthlyPassId = monthlyPassId;
  }
}