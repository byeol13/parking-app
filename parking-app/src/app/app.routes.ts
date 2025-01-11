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
import { VehicleDetailsComponent } from './features/vehicle/components/vehicle-details/vehicle-details.component';
import { PaymentMethodDetailsComponent } from './features/paymentMethod/components/payment-method-details/payment-method-details.component';
import { ParkingOneTimeResDetailsComponent } from './features/parkingOneTimeReservation/components/parking-one-time-res-details/parking-one-time-res-details.component';
import { ParkingMonthlyPassDetailsComponent } from './features/parkingMonthlyPass/components/parking-monthly-pass-details/parking-monthly-pass-details.component';
import { ReservationsMenuComponent } from './features/reservations/components/reservations-menu/reservations-menu.component';
import { AddParkingLotComponent } from './features/parkingLot/components/add-parking-lot/add-parking-lot.component';
import { AddOfferComponent } from './features/offers/components/add-offer/add-offer.component';
import { UpdateOfferComponent } from './features/offers/components/update-offer/update-offer.component';

export const routes: Routes = [
  {path: 'dashboard/customer', component: CustomerListComponent},
  {path: 'customer', component: CustomerDetailsComponent},
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
  {path: 'parkingOneTimeReservationList', component: ParkingOneTimeResListComponent},
  {path: 'parkingOneTimeReservation', component: ParkingOneTimeResDetailsComponent},
  {path: 'dashboard/parkingPricing', component: ParkingPricingListComponent},
  {path: 'currentParkingPricing/:parkingLotId', component: ParkingPricingListComponent},
  {path: 'paymentMethod', component: PaymentMethodDetailsComponent},
  {path: 'pricingException/:parkingLotId', component: PricingExceptionListComponent},
  {path: 'dashboard/vehicle', component: VehicleListComponent},
  {path: 'vehicle', component: VehicleDetailsComponent},
  {path: 'dashboard/reservationsMenu', component: ReservationsMenuComponent}
];
