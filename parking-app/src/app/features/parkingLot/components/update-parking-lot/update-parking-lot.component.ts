import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ParkingLotService } from '../../service/parking-lot.service';
import { ParkingLot } from '../../../../shared/models/ParkingLot.model';

@Component({
  selector: 'app-update-parking-lot',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule, RouterModule],
  templateUrl: './update-parking-lot.component.html',
  styleUrl: './update-parking-lot.component.css'
})
export class UpdateParkingLotComponent implements OnInit{
  
  parkingLotId: any;
  parkingLotForm: FormGroup;

  constructor(private fb: FormBuilder, private parkingLotService: ParkingLotService, private router: Router, private dialog: MatDialog, private activatedRoute: ActivatedRoute){

    this.parkingLotForm = this.fb.group({
      id: [{value: '', disabled: true}],
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

    this.parkingLotForm.get('isMonthlyPassAllow')?.valueChanges.subscribe((value) => {
      if (value === 'Y') {
        this.parkingLotForm.get('monthlyPassCost')?.enable();
      } else {
        this.parkingLotForm.get('monthlyPassCost')?.setValue('');
        this.parkingLotForm.get('monthlyPassCost')?.disable();
      }
    })
  }

  ngOnInit(): void {
    this.parkingLotId = this.activatedRoute.snapshot.paramMap.get('parkingLotId');

    if(this.parkingLotId) {
      this.parkingLotService.getParkingLotById(this.parkingLotId).subscribe((res) => {
        if (res) {
          this.parkingLotForm.patchValue({
            id: res.parkingLotId,
            numberOfBlocks: res.numberOfBlocks,
            isSlotAvailable: res.isSlotAvailable,
            address: res.address,
            zip: res.zip,
            isReentryAllowed: res.isReentryAllowed,
            operatingCompanyN: res.operatingCompanyN,
            isValetParkingAvailable: res.isValetParkingAvailable,
            operationalInNight: res.operationalInNight,
            minimumHrToPay: res.minimumHrToPay,
            isMonthlyPassAllow: res.isMonthlyPassAllow,
            monthlyPassCost: res.monthlyPassCost
          });
        }
      });
    } 
  }

  onSubmit() {
    if(this.parkingLotForm.valid) {
      const updatedParkingLot: ParkingLot = {
        parkingLotId: this.parkingLotId,
        numberOfBlocks: this.parkingLotForm.get('numberOfBlocks')?.value,
        isSlotAvailable: this.parkingLotForm.get('isSlotAvailable')?.value,
        address: this.parkingLotForm.get('address')?.value,
        zip: this.parkingLotForm.get('zip')?.value,
        isReentryAllowed: this.parkingLotForm.get('isReentryAllowed')?.value,
        operatingCompanyN: this.parkingLotForm.get('operatingCompanyN')?.value,
        isValetParkingAvailable: this.parkingLotForm.get('isValetParkingAvailable')?.value,
        operationalInNight: this.parkingLotForm.get('operationalInNight')?.value,
        minimumHrToPay: this.parkingLotForm.get('minimumHrToPay')?.value,
        isMonthlyPassAllow: this.parkingLotForm.get('isMonthlyPassAllow')?.value,
        monthlyPassCost: this.parkingLotForm.get('monthlyPassCost')?.value
      };

      this.parkingLotService.updateParkingLot(updatedParkingLot).subscribe(() => {
        this.router.navigate(['/dashboard/parkingLot']);
      });
    }
  }

}
