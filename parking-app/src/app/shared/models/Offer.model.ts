export class Offer {
  offersId?: number;
  parkingLotDTO: { parkingLotId: number };
  issuedOn: Date;
  validTill: Date;
  bookingDateFrom: Date;
  bookingDateTill: Date;
  discountInPercent: number;
  maxAmountOffer: number;
  discountInAmount: number;
  offerCode: string

  constructor(
    parkingLotDTO: { parkingLotId: number },
    issuedOn: Date,
    validTill: Date,
    bookingDateFrom: Date,
    bookingDateTill: Date,
    discountInPercent: number,
    maxAmountOffer: number,
    discountInAmount: number,
    offerCode: string,
    offersId?: number
  ){
    this.parkingLotDTO = parkingLotDTO;
    this.issuedOn = issuedOn;
    this.validTill = validTill;
    this.bookingDateFrom = bookingDateFrom;
    this.bookingDateTill = bookingDateTill;
    this.discountInPercent = discountInPercent;
    this.maxAmountOffer = maxAmountOffer;
    this.discountInAmount = discountInAmount;
    this.offerCode = offerCode;
    if (offersId) this.offersId = offersId;
  }
}