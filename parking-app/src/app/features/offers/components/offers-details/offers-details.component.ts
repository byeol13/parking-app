import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Offer } from '../../../../shared/models/Offer.model';
import { OffersService } from '../../service/offers.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-offers-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './offers-details.component.html',
  styleUrl: './offers-details.component.css'
})
export class OffersDetailsComponent implements OnInit{

  offerId: any;
  offers: Offer | undefined;
  displayedColumns: string[] = ['offer_code', 'issued_on', 'valid_till', 'booking_date_from', 'booking_date_till', 'discount_in_percent', 'max_amount_offer', 'discount_in_amount', 'parking_lot_address', 'parking_lot_zip', 'actions'];

  constructor(private offersService: OffersService, private activatedRoute: ActivatedRoute){
    this.offerId = this.activatedRoute.snapshot.queryParamMap.get('offerId');
  }

  ngOnInit(): void {
    this.loadOfferById();
  }

  loadOfferById() {
    if(this.offerId) {
      this.offersService.getOfferById(this.offerId).subscribe((res) => {
        this.offers = res;
      })
    }
  }
}
