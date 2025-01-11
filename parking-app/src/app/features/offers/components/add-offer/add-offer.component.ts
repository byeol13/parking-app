import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OffersService } from '../../service/offers.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ParkingLotService } from '../../../parkingLot/service/parking-lot.service';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';
import { Offer } from '../../../../shared/models/Offer.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddOfferDialogComponent } from '../add-offer-dialog/add-offer-dialog.component';

@Component({
  selector: 'app-add-offer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule,  MatDatepickerModule, MatOptionModule],
  templateUrl: './add-offer.component.html',
  styleUrl: './add-offer.component.css'
})
export class AddOfferComponent {

  addOfferForm: FormGroup;
  parkingLots: ParkingLot[] = [];

  constructor(private fb: FormBuilder, private offersService: OffersService,private router: Router, private dialog: MatDialog, private parkingLotService: ParkingLotService){

    this.addOfferForm = this.fb.group({
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

  openConfirmationDialog() {
    if(this.addOfferForm.valid) {
      const addDialog = this.dialog.open(AddOfferDialogComponent, {
        width: '500px', height: '250px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveOffer();
        }
      });
    }
  }

  saveOffer() {
    const newOffer: Offer = {
      offerCode: this.addOfferForm.get('offerCode')?.value,
      issuedOn: this.addOfferForm.get('issuedOn')?.value,
      validTill: this.addOfferForm.get('validTill')?.value,
      bookingDateFrom: this.addOfferForm.get('bookingDateFrom')?.value,
      bookingDateTill: this.addOfferForm.get('bookingDateTill')?.value,
      discountInPercent: this.addOfferForm.get('discountInPercent')?.value,
      maxAmountOffer: this.addOfferForm.get('maxAmountOffer')?.value,
      discountInAmount: this.addOfferForm.get('discountInAmount')?.value,
      parkingLotDTO: {
        parkingLotId: this.addOfferForm.get('parkingLotId')?.value 
      }
    };

    this.offersService.addOffer(newOffer).subscribe(() => {
      this.router.navigate(['/dashboard/offers']);
    });
  }

  goBack() {
    this.router.navigate(['/dashboard/offers']);
  }
}
