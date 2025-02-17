import { UpdateParkingLotComponent } from './features/parkingLot/components/update-parking-lot/update-parking-lot.component';
import { Routes } from '@angular/router';
import { CustomerListComponent } from './features/customer/components/customer-list/customer-list.component';
import { OffersListComponent } from './features/offers/components/offers-list/offers-list.component';
import { ParkingLotListComponent } from './features/parkingLot/components/parking-lot-list/parking-lot-list.component';
import { ParkingMonthlyPassListComponent } from './features/parkingMonthlyPass/components/parking-monthly-pass-list/parking-monthly-pass-list.component';
import { ParkingOneTimeResListComponent } from './features/parkingOneTimeReservation/components/parking-one-time-res-list/parking-one-time-res-list.component';
import { ParkingPricingListComponent } from './features/parkingPricing/components/parking-pricing-list/parking-pricing-list.component';
import { PricingExceptionListComponent } from './features/pricingException/components/pricing-exception-list/pricing-exception-list.component';
import { VehicleListComponent } from './features/vehicle/components/vehicle-list/vehicle-list.component';
import { CustomerDetailsComponent } from './features/customer/components/customer-details/customer-details.component';
import { ParkingLotDetailsComponent } from './features/parkingLot/components/parking-lot-details/parking-lot-details.component';
import { OffersDetailsComponent } from './features/offers/components/offers-details/offers-details.component';
import { ParkingOneTimeResDetailsComponent } from './features/parkingOneTimeReservation/components/parking-one-time-res-details/parking-one-time-res-details.component';
import { ParkingMonthlyPassDetailsComponent } from './features/parkingMonthlyPass/components/parking-monthly-pass-details/parking-monthly-pass-details.component';
import { ReservationsMenuComponent } from './features/reservations/components/reservations-menu/reservations-menu.component';
import { AddParkingLotComponent } from './features/parkingLot/components/add-parking-lot/add-parking-lot.component';
import { AddOfferComponent } from './features/offers/components/add-offer/add-offer.component';
import { UpdateOfferComponent } from './features/offers/components/update-offer/update-offer.component';
import { AddCustomerComponent } from './features/customer/components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './features/customer/components/update-customer/update-customer.component';
import { PaymentMethodListComponent } from './features/paymentMethod/components/payment-method-list/payment-method-list.component';
import { AddParkingMonthlyPassComponent } from './features/parkingMonthlyPass/components/add-parking-monthly-pass/add-parking-monthly-pass.component';
import { UpdateParkingMonthlyPassComponent } from './features/parkingMonthlyPass/components/update-parking-monthly-pass/update-parking-monthly-pass.component';
import { AddParkingOneTimeResComponent } from './features/parkingOneTimeReservation/components/add-parking-one-time-res/add-parking-one-time-res.component';
import { UpdateParkingOneTimeResComponent } from './features/parkingOneTimeReservation/components/update-parking-one-time-res/update-parking-one-time-res.component';

export const routes: Routes = [
  {path: 'dashboard/customer', component: CustomerListComponent},
  {path: 'customer', component: CustomerDetailsComponent},
  {path: 'addCustomer', component: AddCustomerComponent},
  {path: 'updateCustomer/:customerId', component: UpdateCustomerComponent},
  {path: 'dashboard/offers', component: OffersListComponent},
  {path: 'offers', component: OffersDetailsComponent},
  {path: 'addOffer', component: AddOfferComponent},
  {path: 'updateOffer/:offersId', component: UpdateOfferComponent},
  {path: 'dashboard/parkingLot', component: ParkingLotListComponent},
  {path: 'parkingLot', component: ParkingLotDetailsComponent},
  {path: 'addParkingLot', component: AddParkingLotComponent},
  {path: 'updateParkingLot/:parkingLotId', component: UpdateParkingLotComponent},
  {path: 'parkingMonthlyPassList', component: ParkingMonthlyPassListComponent},
  {path: 'parkingMonthlyPass', component: ParkingMonthlyPassDetailsComponent},
  {path: 'addMonthlyPass', component: AddParkingMonthlyPassComponent},
  {path: 'updateMonthlyPass/:monthlyPassId', component: UpdateParkingMonthlyPassComponent},
  {path: 'parkingOneTimeReservationList', component: ParkingOneTimeResListComponent},
  {path: 'parkingOneTimeReservation', component: ParkingOneTimeResDetailsComponent},
  {path: 'addOneTimeReservation', component: AddParkingOneTimeResComponent},
  {path: 'updateOneTimeReservation/:oneTimeResId', component: UpdateParkingOneTimeResComponent},
  {path: 'dashboard/parkingPricing', component: ParkingPricingListComponent},
  {path: 'currentParkingPricing/:parkingLotId', component: ParkingPricingListComponent},
  {path: 'paymentMethod/:customerId', component: PaymentMethodListComponent},
  {path: 'pricingException/:parkingLotId', component: PricingExceptionListComponent},
  {path: 'customerVehicles/:customerId', component: VehicleListComponent},
  {path: 'dashboard/reservationsMenu', component: ReservationsMenuComponent}
];
