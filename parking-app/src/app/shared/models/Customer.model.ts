export interface Customer {
  customerId: number,
  registrationDate: Date,
  isRegularCustomer: boolean,
  contactNumber?: number,
  firstName: string,
  lastName: string,
  billingAddress: string
}