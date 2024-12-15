import { Customer } from "./Customer.model";

export interface PaymentMethod {
  paymentMethodId: number,
  customerDTO: Customer,
  cardType: string,
  cardNumber: string,
  expiryMonth: number,
  expiryYear: number,
  securityCode: string
}