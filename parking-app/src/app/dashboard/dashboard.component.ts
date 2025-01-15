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
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  routes: {path: string, label: string, icon: string}[] = [
    {path: '/dashboard/parkingLot', label: 'Parking Lots', icon: 'pin_drop'},
    {path: '/dashboard/offers', label: 'Offers', icon: 'sell'},
    {path: '/dashboard/customer', label: 'Customers', icon: 'group' },
    {path: '/dashboard/reservationsMenu', label: 'Reservations', icon: 'event'}
  ]

}
