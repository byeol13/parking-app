import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservations-menu',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './reservations-menu.component.html',
  styleUrl: './reservations-menu.component.css'
})
export class ReservationsMenuComponent {

}
