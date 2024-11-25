import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Offer } from '../../../../shared/models/Offer.model';
import { OffersService } from '../../service/offers.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-offers-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})
export class OffersListComponent implements OnInit{

  offers: Offer[] = [];
  displayedColumns: string[] = ['id', 'offer_code', 'issued_on', 'valid_till', 'booking_date_from', 'booking_date_till', 'discount_in_percent', 'max_amount_offer', 'actions'];

  constructor(private offersService: OffersService, private router: Router){}

  ngOnInit(): void {
    this.loadAllOffers();
  }

  loadAllOffers() {
    this.offersService.getAllOffers().subscribe((res) => {
      this.offers = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`offers`, id]);
  }

}
