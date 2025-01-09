import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { ParkingLotService } from '../../service/parking-lot.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddParkingLotDialogComponent } from '../add-parking-lot-dialog/add-parking-lot-dialog.component';

@Component({
  selector: 'app-add-parking-lot',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule],
  templateUrl: './add-parking-lot.component.html',
  styleUrl: './add-parking-lot.component.css'
})
export class AddParkingLotComponent {

  parkingLotForm: FormGroup;

  constructor(private fb: FormBuilder, private parkingLotService: ParkingLotService, private router: Router, private dialog: MatDialog){

    this.parkingLotForm = this.fb.group({
      numberOfBlocks: ['', Validators.required],
      isSlotAvailable: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      isReentryAllowed: ['', Validators.required],
      operatingCompanyN: ['', Validators.required],
      isValetParkingAvailable: ['', Validators.required],
      operationalInNight: ['', Validators.required],
      minimumHrToPay: ['', Validators.required],
      isMonthlyPassAllow: ['', Validators.required],
      monthlyPassCost: ['', Validators.required]
    });

    this.parkingLotForm.get('monthlyPassCost')?.disable();

    this.parkingLotForm.get('isMonthlyPassAllow')?.valueChanges.subscribe(value => {
      if (value === 'Y') {
        this.parkingLotForm.get('monthlyPassCost')?.enable();
      } else {
        this.parkingLotForm.get('monthlyPassCost')?.disable();
      }
    })
  }

  openConfirmationDialog() {
    console.log('Clicked');
    if(this.parkingLotForm.valid) {
      const addDialog = this.dialog.open(AddParkingLotDialogComponent, {
        width: '500px', height: '250px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveParkingLot();
        }
      });
    }
  }

  saveParkingLot() {
    this.parkingLotService.addParkingLot(this.parkingLotForm.value).subscribe(() => {
      this.router.navigate(['/dashboard/parkingLot']);
    });
  }

  goBack() {
    this.router.navigate(['/dashboard/parkingLot']);
  }

}
