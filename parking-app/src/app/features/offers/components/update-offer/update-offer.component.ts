import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { ParkingLotService } from '../../../parkingLot/service/parking-lot.service';
import { OffersService } from '../../service/offers.service';
import { Offer } from '../../../../shared/models/Offer.model';

@Component({
  selector: 'app-update-offer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule,  MatDatepickerModule, MatOptionModule, RouterModule],
  templateUrl: './update-offer.component.html',
  styleUrl: './update-offer.component.css'
})
export class UpdateOfferComponent implements OnInit{

  offerId: any;
  editOfferForm: FormGroup;
  parkingLots: ParkingLot[] = [];

  constructor(private fb: FormBuilder, private offersService: OffersService,private router: Router, private parkingLotService: ParkingLotService, private activatedRoute: ActivatedRoute){

    this.editOfferForm = this.fb.group({
      id: [{value: '', disabled: true}],
      offerCode: ['', Validators.required],
      issuedOn: ['', Validators.required],
      validTill: ['', Validators.required],
      bookingDateFrom: ['', Validators.required],
      bookingDateTill: ['', Validators.required],
      discountInPercent: ['', Validators.required],
      maxAmountOffer: ['', Validators.required],
      discountInAmount: ['', Validators.required],
      parkingLotId: ['', Validators.required]
    });

    this.loadParkingLots();
  }

  loadParkingLots() {
    this.parkingLotService.getAllParkingLots().subscribe((res) => {
      this.parkingLots = res;
    })
  }

  ngOnInit(): void {
    this.offerId = this.activatedRoute.snapshot.paramMap.get('offersId');

    if(this.offerId) {
      this.offersService.getOfferById(this.offerId).subscribe((res) => {
        if(res) {
          this.editOfferForm.patchValue({
            id: res.offersId,
            offerCode: res.offerCode,
            issuedOn: res.issuedOn,
            validTill: res.validTill,
            bookingDateFrom: res.bookingDateFrom,
            bookingDateTill: res.bookingDateTill,
            discountInPercent: res.discountInPercent,
            maxAmountOffer: res.maxAmountOffer,
            discountInAmount: res.discountInAmount,
            parkingLotId: res.parkingLotDTO.parkingLotId
          });
        }
      });
    }
  }

  onSubmit() {
    if(this.editOfferForm.valid) {
      const updatedOffer: Offer = {
        offersId: this.offerId,
        offerCode: this.editOfferForm.get('offerCode')?.value,
        issuedOn: this.editOfferForm.get('issuedOn')?.value,
        validTill: this.editOfferForm.get('validTill')?.value,
        bookingDateFrom: this.editOfferForm.get('bookingDateFrom')?.value,
        bookingDateTill: this.editOfferForm.get('bookingDateTill')?.value,
        discountInPercent: this.editOfferForm.get('discountInPercent')?.value,
        maxAmountOffer: this.editOfferForm.get('maxAmountOffer')?.value,
        discountInAmount: this.editOfferForm.get('discountInAmount')?.value,
        parkingLotDTO: {
          parkingLotId: this.editOfferForm.get('parkingLotId')?.value,
        }
      };

      this.offersService.updateOffer(updatedOffer).subscribe(() => {
        this.router.navigate(['/dashboard/offers']);
      });
    }
  }
}
