import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ParkingPricingService } from '../../service/parking-pricing.service';
import { ParkingPricing } from '../../../../shared/models/ParkingPricing.model';

@Component({
  selector: 'app-update-parking-pricing',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './update-parking-pricing.component.html',
  styleUrl: './update-parking-pricing.component.css'
})
export class UpdateParkingPricingComponent implements OnInit{

  editPricingForm: FormGroup;
  dayOfWeekNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateParkingPricingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {parkingPricingId: number }, private parkingPricingService: ParkingPricingService 
  ) {
    this.editPricingForm = fb.group({
      id: [{value: '', disabled: true}],
      dayOfWeek: ['', Validators.required],
      morningHrCost: ['', Validators.required],
      middayHrCost: ['', Validators.required],
      eveningHrCost: ['', Validators.required],
      allDayCost: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if(this.data.parkingPricingId) {
      this.parkingPricingService.getParkingPricingById(this.data.parkingPricingId).subscribe((res) => {
        if (res) {
          this.editPricingForm.patchValue({
            id: res.parkingPricingId,
            dayOfWeek: res.dayOfWeek,
            morningHrCost: res.morningHrCost,
            middayHrCost: res.middayHrCost,
            eveningHrCost: res.eveningHrCost,
            allDayCost: res.allDayCost
          });
        }
      });
    }
  }

  onSubmit() {
    if (this.editPricingForm.valid) {
      const updatedPricing = {
        parkingPricingId: this.data.parkingPricingId,
        dayOfWeek: this.editPricingForm.get('dayOfWeek')?.value,
        morningHrCost: this.editPricingForm.get('morningHrCost')?.value,
        middayHrCost: this.editPricingForm.get('middayHrCost')?.value,
        eveningHrCost: this.editPricingForm.get('eveningHrCost')?.value,
        allDayCost: this.editPricingForm.get('allDayCost')?.value
      };

      this.dialogRef.close(updatedPricing);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
