import { Customer } from "./Customer.model";

export  interface Vehicle {
  vehicleId: number,
  customerDTO: Customer,
  vehicleNumber: string
}