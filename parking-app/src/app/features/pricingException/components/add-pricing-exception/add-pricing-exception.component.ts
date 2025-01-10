import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-pricing-exception',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, MatInputModule, MatNativeDateModule, MatDatepickerModule],
  templateUrl: './add-pricing-exception.component.html',
  styleUrl: './add-pricing-exception.component.css'
})
export class AddPricingExceptionComponent {

  addPricingExceptionForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddPricingExceptionComponent>){
    this.addPricingExceptionForm = this.fb.group({
      date: ['', Validators.required],
      morningHrCost: ['', Validators.required],
      middayHrCost: ['', Validators.required],
      eveningHrCost: ['', Validators.required],
      allDayCost: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.addPricingExceptionForm.valid) {
      this.dialogRef.close(this.addPricingExceptionForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
