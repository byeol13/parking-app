import { Customer } from "./Customer.model";

export interface PaymentMethod {
  id: number,
  customer_id: Customer,
  card_type: string,
  card_number: string,
  expiry_month: number,
  expiry_year: number,
  security_code: string
}