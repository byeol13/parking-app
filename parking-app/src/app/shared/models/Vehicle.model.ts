import { Customer } from "./Customer.model";

export  interface Vehicle {
  id: number,
  customer_id: Customer,
  vehicle_number: string
}