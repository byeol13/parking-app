export class Vehicle {
  vehicleId?: number;
  customerDTO: { customerId: any };
  vehicleNumber: string;

  constructor(
    customerDTO: { customerId: any },
    vehicleNumber: string,
    vehicleId?: number
  ){
    this.customerDTO = customerDTO;
    this.vehicleNumber = vehicleNumber;
    if (vehicleId) this.vehicleId = vehicleId;
  }
}