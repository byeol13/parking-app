export interface ParkingLot {
  parkingLotId: number;
  numberOfBlocks: number;
  isSlotAvailable: string;
  address: string;
  zip: string;
  isReentryAllowed: string;
  operatingCompanyN: string;
  isValetParkingAvailable: string;
  operationalInNight: string;
  minimumHrToPay: number;
  isMonthlyPassAllow: string;
  monthlyPassCost: number;
}