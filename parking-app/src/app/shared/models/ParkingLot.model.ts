export interface ParkingLot {
  id: number,
  number_of_blocks: number,
  is_slot_available: string,
  address: string,
  zip: string,
  is_reentry_allowed: string,
  operating_company_n: string,
  is_valet_parking_available: string,
  minimum_hr_to_pay: number,
  is_monthly_pass_allow: string,
  monthly_pass_cost: number
}