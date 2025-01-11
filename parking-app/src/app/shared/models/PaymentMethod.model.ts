export class PaymentMethod {
  paymentMethodId?: number;
  customerDTO: { customerId: number };
  cardType: string;
  cardNumber: string;
  expiryMonth: number;
  expiryYear: number;
  securityCode: string;

  constructor(
    customerDTO: { customerId: number },
    cardType: string,
    cardNumber: string,
    expiryMonth: number,
    expiryYear: number,
    securityCode: string,
    paymentMethodId?: number
  ){
    this.customerDTO = customerDTO;
    this.cardType = cardType;
    this.cardNumber = cardNumber;
    this.expiryMonth = expiryMonth;
    this.expiryYear = expiryYear;
    this.securityCode = securityCode;
    if (paymentMethodId) this.paymentMethodId = paymentMethodId;
  }
}