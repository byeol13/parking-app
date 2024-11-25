export interface Customer {
  id: number,
  registration_date: Date,
  is_regular_customer: boolean,
  contactNumber?: number,
  firstName: string,
  lastName: string,
  billingAdress: string
}