import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Offer } from '../../../../shared/models/Offer.model';
import { OffersService } from '../../service/offers.service';

@Component({
  selector: 'app-offers-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})
export class OffersListComponent implements OnInit{

  offers: Offer[] = [];
  displayedColumns: string[] = ['id', 'offer_code', 'issued_on', 'valid_till', 'booking_date_from', 'booking_date_till', 'discount_in_percent', 'max_amount_offer'];

  constructor(private offersService: OffersService){}

  ngOnInit(): void {
    this.loadAllOffers();
  }

  loadAllOffers() {
    this.offersService.getAllOffers().subscribe((res) => {
      this.offers = res;
    })
  }

}
