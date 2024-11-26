import { Routes } from '@angular/router';
import { CustomerListComponent } from './features/customer/components/customer-list/customer-list.component';
import { OffersListComponent } from './features/offers/components/offers-list/offers-list.component';
import { ParkingLotListComponent } from './features/parkingLot/components/parking-lot-list/parking-lot-list.component';
import { ParkingMonthlyPassListComponent } from './features/parkingMonthlyPass/components/parking-monthly-pass-list/parking-monthly-pass-list.component';
import { ParkingOneTimeResListComponent } from './features/parkingOneTimeReservation/components/parking-one-time-res-list/parking-one-time-res-list.component';
import { ParkingPricingListComponent } from './features/parkingPricing/components/parking-pricing-list/parking-pricing-list.component';
import { PaymentMethodListComponent } from './features/paymentMethod/components/payment-method-list/payment-method-list.component';
import { PricingExceptionListComponent } from './features/pricingException/components/pricing-exception-list/pricing-exception-list.component';
import { VehicleListComponent } from './features/vehicle/components/vehicle-list/vehicle-list.component';
import { CustomerDetailsComponent } from './features/customer/components/customer-details/customer-details.component';
import { ParkingLotDetailsComponent } from './features/parkingLot/components/parking-lot-details/parking-lot-details.component';
import { OffersDetailsComponent } from './features/offers/components/offers-details/offers-details.component';
import { VehicleDetailsComponent } from './features/vehicle/components/vehicle-details/vehicle-details.component';
import { PaymentMethodDetailsComponent } from './features/paymentMethod/components/payment-method-details/payment-method-details.component';
import { ParkingPricingDetailsComponent } from './features/parkingPricing/components/parking-pricing-details/parking-pricing-details.component';
import { PricingExceptionDetailsComponent } from './features/pricingException/components/pricing-exception-details/pricing-exception-details.component';

export const routes: Routes = [
  {path: 'dashboard/customer', component: CustomerListComponent},
  {path: 'customer/:id', component: CustomerDetailsComponent},
  {path: 'dashboard/offers', component: OffersListComponent},
  {path: 'offers/:id', component: OffersDetailsComponent},
  {path: 'dashboard/parkingLot', component: ParkingLotListComponent},
  {path: 'parkingLot/:id', component: ParkingLotDetailsComponent},
  {path: 'dashboard/parkingMonthlyPass', component: ParkingMonthlyPassListComponent},
  {path: 'dashboard/parkingOneTimeReservation', component: ParkingOneTimeResListComponent},
  {path: 'dashboard/parkingPricing', component: ParkingPricingListComponent},
  {path: 'parkingPricing/:id', component: ParkingPricingDetailsComponent},
  {path: 'dashboard/paymentMethod', component: PaymentMethodListComponent},
  {path: 'paymentMethod/:id', component: PaymentMethodDetailsComponent},
  {path: 'dashboard/pricingException', component: PricingExceptionListComponent},
  {path: 'pricingException/:id', component: PricingExceptionDetailsComponent},
  {path: 'dashboard/vehicle', component: VehicleListComponent},
  {path: 'vehicle/:id', component: VehicleDetailsComponent}
];
