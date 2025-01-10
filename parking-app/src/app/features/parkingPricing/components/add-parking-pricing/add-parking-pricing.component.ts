import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
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

@Component({
  selector: 'app-add-parking-pricing',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './add-parking-pricing.component.html',
  styleUrl: './add-parking-pricing.component.css'
})
export class AddParkingPricingComponent {

  addPricingForm: FormGroup;
  dayOfWeekNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddParkingPricingComponent>
  ) {
    this.addPricingForm = this.fb.group({
      dayOfWeek: ['', Validators.required],
      morningHrCost: ['', Validators.required],
      middayHrCost: ['', Validators.required],
      eveningHrCost: ['', Validators.required],
      allDayCost: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addPricingForm.valid) {
      this.dialogRef.close(this.addPricingForm.value); 
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
