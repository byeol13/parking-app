export interface Customer {
  customerId: number,
  registrationDate: Date,
  isRegularCusto: string,
  contactNumber?: number,
  firstName: string,
  lastName: string,
  billingAddress: string
}