import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  routes: {path: string, label: string}[] = [
    {path: '/dashboard/customer', label: 'Customer'},
    {path: '/dashboard/vehicle', label: 'Vehicles'},
    {path: '/dashboard/parkingLot', label: 'Parking Lot'},
    {path: '/dashboard/parkingMonthlyPass', label: 'Parking Monthly Pass'},
    {path: '/dashboard/parkingOneTimeReservation', label: 'One Time Reservation'},
    {path: '/dashboard/parkingPricing', label: 'Parking Pricing'},
    {path: '/dashboard/paymentMethod', label: 'Payment Method'},
    {path: '/dashboard/pricingException', label: 'Pricing Exceptions'},
    {path: '/dashboard/offers', label: 'Offers'},
  ]

}
